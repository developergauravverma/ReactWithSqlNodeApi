import sql from "mssql";
import SqlConfig from "./SqlConfig.js";

export const getDataFromDatabase = async (
  procedureName,
  objParamWithKeyAndValue = {},
  objParamType = {}
) => {
  const pool = await sql.connect(SqlConfig);

  let request = await pool.request();
  for (let key in objParamWithKeyAndValue) {
    const type = GETvalueByKey(key, objParamType);
    if (type === "text")
      request.input(key, sql.NVarChar, objParamWithKeyAndValue[key]);
    else if (type === "date")
      request.input(key, sql.Date, objParamWithKeyAndValue[key]);
  }

  const result = await request.execute(procedureName);
  await sql.close();
  return result.recordset[0];
};

export const GETvalueByKey = (key, obj) => {
  let val = null;
  for (let sKey in obj) {
    if (sKey === key) {
      val = obj[sKey];
    }
  }
  return val;
};