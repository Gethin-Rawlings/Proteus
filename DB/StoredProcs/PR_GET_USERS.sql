/*    ==Scripting Parameters==

    Source Server Version : SQL Server 2016 (13.0.4206)
    Source Database Engine Edition : Microsoft SQL Server Express Edition
    Source Database Engine Type : Standalone SQL Server

    Target Server Version : SQL Server 2017
    Target Database Engine Edition : Microsoft SQL Server Standard Edition
    Target Database Engine Type : Standalone SQL Server
*/

USE [Proteustraining]
GO
/****** Object:  StoredProcedure [dbo].[PR_GET_USER]    Script Date: 01/01/2018 10:38:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[PR_GET_USERS]
    @production int =null,
    @network int =null,
    @indie int =null
as
begin

    set nocount on

   -- insert into testing (testTime,prod,indie,network) values(getdate(),@production,@indie,@network)
    
	select  distinct
            u.USR_NAME,
            u.USR_FIRST_NAME,
            u.USR_LAST_NAME,
            u.USR_EMAIL_ADDRESS,
            u.USR_ACCOUNT_EXPIRY
    from    users u 
    join    user_roles ur 
    on      u.USR_NAME = ur.USR_NAME
    join    ROLE_ORGANISATIONS ro 
    ON      ur.ROLE_NAME = ro.ROLE_NAME
    where   ro.ORG_ORGANISATION_ID = @production
    or      ro.ORG_ORGANISATION_ID = @network
    OR      ro.ORG_ORGANISATION_ID = @indie
	
	
	--for JSON path, root('password')
           
end
