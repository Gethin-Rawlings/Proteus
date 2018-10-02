USE [Proteus]
GO

/****** Object:  StoredProcedure [dbo].[PR_ADD_USER]    Script Date: 10/2/2018 1:19:14 PM ******/
DROP PROCEDURE [dbo].[PR_ADD_USER]
GO

/****** Object:  StoredProcedure [dbo].[PR_ADD_USER]    Script Date: 10/2/2018 1:19:14 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[PR_ADD_USER]
    @username nvarchar(50),
	@userFirstname nvarchar(100),
	@userLastname nvarchar(100),
	@userEmailAddress nvarchar(100), 
	@userMobileNumber nvarchar(50),
	@accountExpiryDate datetime,
	@userIdIndie bit,
	@password nvarchar(500)
as
begin

    set nocount on
	if not exists (select USR_NAME from users where USR_NAME = @username)
	begin
	insert into users (
						USR_NAME,
						USR_PASSWORD,
						USR_FIRST_NAME,
						USR_LAST_NAME,
						USR_EMAIL_ADDRESS,
						USR_ACCOUNT_CREATED,
						USR_ACCOUNT_EXPIRY,
						USR_PASSWORD_LAST_CHANGED,
						USR_INDIE_IND,
						USR_ACCOUNT_LOCKED_IND,
						USR_MOBILE_NUMBER,
						USR_LDAP_IND,
						USER_PRIMARY_INDIE,
						USR_NOTIFICATIONS_STATUS,
						USR_SECURITY_CODE_DELIVERY
						) 
	values (
			@username,
			@password,
			@userFirstname,
			@userLastname,
			@userEmailAddress,
			getdate(),
			null,
			getdate(),
			isnull(@userIdIndie,0),
			0,
			@userMobileNumber,
			0,
			0,
			0,
			0
			)
	end
	select USR_NAME from users where USR_NAME = @username

	
           
end
GO


