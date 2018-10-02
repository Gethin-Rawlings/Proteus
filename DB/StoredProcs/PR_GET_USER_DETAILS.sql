USE [Proteus]
GO

/****** Object:  StoredProcedure [dbo].[PR_GET_USER_DETAILS]    Script Date: 10/2/2018 1:20:39 PM ******/
DROP PROCEDURE [dbo].[PR_GET_USER_DETAILS]
GO

/****** Object:  StoredProcedure [dbo].[PR_GET_USER_DETAILS]    Script Date: 10/2/2018 1:20:39 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[PR_GET_USER_DETAILS]
    @userName varchar(50)
as
begin

    set nocount on

	select  USR_NAME,
            USR_FIRST_NAME,
            USR_LAST_NAME,
            USR_EMAIL_ADDRESS,
            USR_MOBILE_NUMBER,
            USR_ACCOUNT_CREATED,
            USR_ACCOUNT_EXPIRY,
            USR_PASSWORD,
            USR_PASSWORD_LAST_CHANGED,
            USR_INDIE_IND
from        users 
where       usr_name = @userName
	

           
end
GO


