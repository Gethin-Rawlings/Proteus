
USE [Proteustraining]
GO
drop PROCEDURE [dbo].[PR_GET_USERS]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON        
GO
create PROCEDURE [dbo].[PR_GET_USERS]
    @production int =null,
    @network int =null,
    @indie int =null,
    @username varchar(500)=null
as
begin

    set nocount on

   declare @firstname varchar(500)
   declare @lastname varchar(500)
   declare @space int

   if CHARINDEX(' ',@username) <> 0
    BEGIN   
        set @space = CHARINDEX(' ',@username)
        set @firstname = substring(@username,1,@space-1)
        set @lastname = substring(@username,@space+1,len(@username)-@space)
    END  
    if CHARINDEX(' ',@username) = 0  
    BEGIN
        set @firstname = @username
    END
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
    OR      u.usr_name = @username
    or      u.USR_FIRST_NAME like @firstname+'%'
            
    OR      (
                u.USR_FIRST_NAME = @firstname 
            AND u.USR_LAST_NAME like @lastname+'%'
            )
	           
end
