USE [Proteus]
GO

/****** Object:  StoredProcedure [dbo].[PR_UPDATE_USER]    Script Date: 10/2/2018 1:23:29 PM ******/
DROP PROCEDURE [dbo].[PR_UPDATE_USER]
GO

/****** Object:  StoredProcedure [dbo].[PR_UPDATE_USER]    Script Date: 10/2/2018 1:23:29 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[PR_UPDATE_USER]
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

	update users set USR_FIRST_NAME = @userFirstname where usr_name = @username and USR_FIRST_NAME <> @userFirstname
	update users set USR_LAST_NAME = @userLastname where usr_name = @username and USR_LAST_NAME <> @userLastname
	update users set USR_EMAIL_ADDRESS = @userEmailAddress where usr_name = @username and USR_EMAIL_ADDRESS <> @userEmailAddress
	update users set USR_MOBILE_NUMBER = @userMobileNumber where usr_name = @username and USR_MOBILE_NUMBER <> @userMobileNumber
	update users set USR_ACCOUNT_EXPIRY = @accountExpiryDate where usr_name = @username and USR_ACCOUNT_EXPIRY <> @accountExpiryDate
	update users set USR_INDIE_IND = @userIdIndie where usr_name = @username and USR_INDIE_IND <> @userIdIndie
	update users set USR_PASSWORD = @password, USR_PASSWORD_LAST_CHANGED = getdate() where usr_name = @username and USR_PASSWORD <> @password


	--update	users 
	--set		USR_FIRST_NAME		=	@userFirstname,
	--		USR_LAST_NAME		=	@userLastname,
	--		USR_EMAIL_ADDRESS	=	@userEmailAddress,
	--		USR_MOBILE_NUMBER	=	@userMobileNumber,
	--		USR_ACCOUNT_EXPIRY	=	@accountExpiryDate,
	--		USR_INDIE_IND		=	@userIdIndie,
	--		USR_PASSWORD		=	@password
	--where	USR_NAME = @username
	
	select USR_NAME from users where USR_NAME = @username

	
           
end
GO


