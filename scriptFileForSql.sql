USE [master]
GO
/****** Object:  Database [gauravDB]    Script Date: 24-03-2024 17:27:11 ******/
CREATE DATABASE [gauravDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'gauravDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\gauravDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'gauravDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\gauravDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [gauravDB] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [gauravDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [gauravDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [gauravDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [gauravDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [gauravDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [gauravDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [gauravDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [gauravDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [gauravDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [gauravDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [gauravDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [gauravDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [gauravDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [gauravDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [gauravDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [gauravDB] SET  ENABLE_BROKER 
GO
ALTER DATABASE [gauravDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [gauravDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [gauravDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [gauravDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [gauravDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [gauravDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [gauravDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [gauravDB] SET RECOVERY FULL 
GO
ALTER DATABASE [gauravDB] SET  MULTI_USER 
GO
ALTER DATABASE [gauravDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [gauravDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [gauravDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [gauravDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [gauravDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [gauravDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'gauravDB', N'ON'
GO
ALTER DATABASE [gauravDB] SET QUERY_STORE = ON
GO
ALTER DATABASE [gauravDB] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [gauravDB]
GO
/****** Object:  Table [dbo].[tbl_postLike]    Script Date: 24-03-2024 17:27:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_postLike](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[postId] [int] NULL,
	[userId] [int] NULL,
	[isLike] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_Posts]    Script Date: 24-03-2024 17:27:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_Posts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NULL,
	[Discription] [nvarchar](1000) NULL,
	[Tags] [nvarchar](200) NULL,
	[ImagePath] [nvarchar](1000) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_User]    Script Date: 24-03-2024 17:27:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](100) NULL,
	[Password] [nvarchar](500) NULL,
	[Email] [nvarchar](200) NULL,
	[Mobile] [nvarchar](100) NULL,
	[Address] [nvarchar](1000) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tbl_postLike] ON 

INSERT [dbo].[tbl_postLike] ([id], [postId], [userId], [isLike]) VALUES (1, 1, 4, 1)
INSERT [dbo].[tbl_postLike] ([id], [postId], [userId], [isLike]) VALUES (2, 2, 4, 1)
INSERT [dbo].[tbl_postLike] ([id], [postId], [userId], [isLike]) VALUES (3, 3, 4, 0)
INSERT [dbo].[tbl_postLike] ([id], [postId], [userId], [isLike]) VALUES (4, 4, 4, 1)
SET IDENTITY_INSERT [dbo].[tbl_postLike] OFF
GO
SET IDENTITY_INSERT [dbo].[tbl_Posts] ON 

INSERT [dbo].[tbl_Posts] ([Id], [Title], [Discription], [Tags], [ImagePath]) VALUES (1, N'title1', N'Discription1', N'tags1', N'post1.jpg')
INSERT [dbo].[tbl_Posts] ([Id], [Title], [Discription], [Tags], [ImagePath]) VALUES (2, N'title2', N'Discription2', N'tags2', N'post2.jpg')
INSERT [dbo].[tbl_Posts] ([Id], [Title], [Discription], [Tags], [ImagePath]) VALUES (3, N'title3', N'Discription3', N'tags3', N'post3.jpg')
INSERT [dbo].[tbl_Posts] ([Id], [Title], [Discription], [Tags], [ImagePath]) VALUES (4, N'title4', N'Discription4', N'tags4', N'post4.jpg')
INSERT [dbo].[tbl_Posts] ([Id], [Title], [Discription], [Tags], [ImagePath]) VALUES (5, N'title5', N'Discription5', N'tags5', N'post5.jpg')
SET IDENTITY_INSERT [dbo].[tbl_Posts] OFF
GO
SET IDENTITY_INSERT [dbo].[tbl_User] ON 

INSERT [dbo].[tbl_User] ([Id], [UserName], [Password], [Email], [Mobile], [Address]) VALUES (1, N'user1', N'Password', N'user1@gmail.com', N'1234567890', N'F-7')
INSERT [dbo].[tbl_User] ([Id], [UserName], [Password], [Email], [Mobile], [Address]) VALUES (2, N'user2', N'Password', N'user2@gmail.com', N'1234567890', N'F-7')
INSERT [dbo].[tbl_User] ([Id], [UserName], [Password], [Email], [Mobile], [Address]) VALUES (3, N'user3', N'Password', N'user3@gmail.com', N'1234567890', N'F-7')
INSERT [dbo].[tbl_User] ([Id], [UserName], [Password], [Email], [Mobile], [Address]) VALUES (4, N'gaurav', N'123456', N'gaurav@gmail.com', N'1234567890', N'paper-mill')
INSERT [dbo].[tbl_User] ([Id], [UserName], [Password], [Email], [Mobile], [Address]) VALUES (6, N'anshika', N'123', N'anshika@fgmail.com', N'8958833980', N'gjhhk')
SET IDENTITY_INSERT [dbo].[tbl_User] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_tbl_User_Email]    Script Date: 24-03-2024 17:27:11 ******/
CREATE NONCLUSTERED INDEX [IX_tbl_User_Email] ON [dbo].[tbl_User]
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[tbl_postLike] ADD  DEFAULT ((0)) FOR [isLike]
GO
/****** Object:  StoredProcedure [dbo].[sp_GetPosts]    Script Date: 24-03-2024 17:27:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create   procedure [dbo].[sp_GetPosts]
as
begin
	select * from tbl_Posts
end
GO
/****** Object:  StoredProcedure [dbo].[SP_GetUserByEmail]    Script Date: 24-03-2024 17:27:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[SP_GetUserByEmail]
	@Email nvarchar(200)
AS
BEGIN
	SELECT * FROM tbl_User WHERE Email = @Email
END
GO
/****** Object:  StoredProcedure [dbo].[SP_InsertUser]    Script Date: 24-03-2024 17:27:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[SP_InsertUser]
	@UserName nvarchar(100),
	@Password nvarchar(500),
	@Email nvarchar(200),
	@Mobile nvarchar(100),
	@Address nvarchar(1000)
AS
BEGIN
	
	INSERT INTO tbl_User (UserName,[Password],Email,Mobile,[Address])
	VALUES
	(@UserName, @Password, @Email, @Mobile, @Address)
	
	SELECT * FROM tbl_User WHERE Id = SCOPE_IDENTITY()

END	
GO
/****** Object:  StoredProcedure [dbo].[SP_IsEmailExists]    Script Date: 24-03-2024 17:27:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[SP_IsEmailExists]
	@email nvarchar(200)
AS
BEGIN
	DECLARE	@Result INT = 0;
	IF EXISTS (SELECT 1 FROM tbl_User WHERE Email = @email)
		SET @Result = 1
	ELSE
		SET @Result = 0
	SELECT @Result as result
END
GO
/****** Object:  StoredProcedure [dbo].[sp_IsLikeByUserId]    Script Date: 24-03-2024 17:27:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create   procedure [dbo].[sp_IsLikeByUserId]  
 @userId int,  
 @postId int  
as  
begin  
 declare @isLike bit = 0  
 if exists (select 1 From tbl_postLike where postId = @postId and userId = @userId)  
 begin  
  select @isLike = isLike From tbl_postLike where postId = @postId and userId = @userId
 end  
 else  
 begin  
  set @isLike = 0  
 end  
 select @isLike as isLike  
end
GO
/****** Object:  StoredProcedure [dbo].[sp_likeCount]    Script Date: 24-03-2024 17:27:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create   procedure [dbo].[sp_likeCount]  
 @postId int  
as  
begin  
 declare @count int = 0;  
 set @count = (select count(1) from tbl_postLike where postId = @postId and isLike = 1)
 select @count as postLikeCount  
end
GO
/****** Object:  StoredProcedure [dbo].[sp_SaveLikeOnPost]    Script Date: 24-03-2024 17:27:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create   procedure [dbo].[sp_SaveLikeOnPost]
	@userId int,
	@postId int
as
begin
	declare @isLike bit = 0
	if exists (select 1 from tbl_postLike where userId=@userId and postId = @postId)
	begin
		update tbl_postLike set isLike = isLike ^ 1 where userId=@userId and postId = @postId
	end
	else
	begin
		insert into tbl_postLike (userId,postId,isLike) values
		(@userId, @postId, 1)
	end
	select top 1 @isLike = isLike from tbl_postLike where userId=@userId and postId = @postId
	select @isLike as isLike
end
GO
USE [master]
GO
ALTER DATABASE [gauravDB] SET  READ_WRITE 
GO
