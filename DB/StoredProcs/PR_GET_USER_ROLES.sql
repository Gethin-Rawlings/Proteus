USE [Proteus]
GO

/****** Object:  StoredProcedure [dbo].[PR_GET_USER_ROLES]    Script Date: 10/2/2018 1:21:45 PM ******/
DROP PROCEDURE [dbo].[PR_GET_USER_ROLES]
GO

/****** Object:  StoredProcedure [dbo].[PR_GET_USER_ROLES]    Script Date: 10/2/2018 1:21:45 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[PR_GET_USER_ROLES]
    @userName varchar(50)
as
begin

    set nocount on

	select  ur.USR_NAME,
			ur.ROLE_NAME,
			ro.ROLE_DISPLAY_NAME
from        USER_ROLES ur
join		ROLES ro
on			ur.role_name = ro.role_name
where       usr_name = @userName
	

           
end
GO


