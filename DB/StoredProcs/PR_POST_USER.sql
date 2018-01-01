/*    ==Scripting Parameters==

    Source Server Version : SQL Server 2016 (13.0.4206)
    Source Database Engine Edition : Microsoft SQL Server Express Edition
    Source Database Engine Type : Standalone SQL Server

    Target Server Version : SQL Server 2017
    Target Database Engine Edition : Microsoft SQL Server Standard Edition
    Target Database Engine Type : Standalone SQL Server
*/

USE [Proteus]
GO
/****** Object:  StoredProcedure [dbo].[PR_POST_USER]    Script Date: 01/01/2018 10:38:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[PR_POST_USER]
    @name nvarchar(50),
	@password nvarchar(500)
as
begin

    set nocount on

	insert into user1 (name,password) values(@name,@password)

	select @name
	
           
end
