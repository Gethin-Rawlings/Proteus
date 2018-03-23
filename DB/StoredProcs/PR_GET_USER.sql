/*    ==Scripting Parameters==

    Source Server Version : SQL Server 2016 (13.0.4206)
    Source Database Engine Edition : Microsoft SQL Server Express Edition
    Source Database Engine Type : Standalone SQL Server

    Target Server Version : SQL Server 2017
    Target Database Engine Edition : Microsoft SQL Server Standard Edition
    Target Database Engine Type : Standalone SQL Server
*/

USE [Proteustraining]
go
drop PROCEDURE [dbo].[PR_GET_USER]
GO
/****** Object:  StoredProcedure [dbo].[PR_GET_USER]    Script Date: 01/01/2018 10:38:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_GET_USER]
    @username nvarchar(50)
as
begin

    set nocount on
    
	select	
			[USR_PASSWORD] as password
	from	users
	
	where	[usr_name] = @username 
	--for JSON path, root('password')
           
end
GO
