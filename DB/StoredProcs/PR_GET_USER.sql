USE [Proteus]
GO

/****** Object:  StoredProcedure [dbo].[PR_GET_USER]    Script Date: 10/2/2018 1:20:13 PM ******/
DROP PROCEDURE [dbo].[PR_GET_USER]
GO

/****** Object:  StoredProcedure [dbo].[PR_GET_USER]    Script Date: 10/2/2018 1:20:13 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[PR_GET_USER]
    @username nvarchar(50)
as
begin

    set nocount on
    
	IF OBJECT_ID('tempdb..#userInfo') IS NOT NULL DROP TABLE #userInfo

create table #userInfo
	( 
		id int identity(1,1) primary key,
		name varchar(20),
		password nvarchar(500),
		supplier bit default(0),
		network bit default(0),
		admin bit  default(0),
		finance bit  default(0),
		commission bit  default(0),
		classical bit default(0),
		reports bit default(0)
	)

	insert into #userInfo(NAME,PASSWORD) select USR_NAME,USR_PASSWORD from users where	usr_name = @username 

	update u set supplier = 1
	from	#userInfo u
	join	USER_ROLES ur 
	on		u.NAME = ur.USR_NAME
	left join	ROLE_ORGANISATIONS ro
	on		ur.ROLE_NAME = ro.ROLE_NAME
	left join	organisations org 
	on		ro.org_organisation_id = org.org_organisation_id	
	where	org.ORG_ORGANISATION_TYPE in ('DG','DE','I')

	update u set network = 1 	
	from	#userInfo u
	join	USER_ROLES ur 
	on		u.NAME = ur.USR_NAME
	left join	ROLE_ORGANISATIONS ro
	on		ur.ROLE_NAME = ro.ROLE_NAME
	left join	organisations org 
	on		ro.org_organisation_id = org.org_organisation_id	
	where	org.ORG_ORGANISATION_TYPE = 'N'

	update u set admin = 1 	
	from	#userInfo u
	join	USER_ROLES ur 
	on		u.NAME = ur.USR_NAME
	where	ur.ROLE_NAME = 'USER_ADMIN'

	update u set classical = 1 	
	from	#userInfo u
	join	USER_ROLES ur 
	on		u.NAME = ur.USR_NAME
	join ROLE_ORGANISATIONS ro 
	on ur.ROLE_NAME = ro.ROLE_NAME
	join ROLE_PERMISSION_GROUPS rpg 
	on ro.ROLE_NAME = rpg.ROLE_NAME
	join PERMISSIONS_GROUP_PERMISSIONS pgp 
	on rpg.PERG_NAME = pgp.PERG_NAME
	where perm_name = 'SEARCH_MUSIC_CLASSICAL'

	update u set commission = 1 	
	from	#userInfo u
	join	USER_ROLES ur 
	on		u.NAME = ur.USR_NAME
	join ROLE_ORGANISATIONS ro 
	on ur.ROLE_NAME = ro.ROLE_NAME
	join ROLE_PERMISSION_GROUPS rpg 
	on ro.ROLE_NAME = rpg.ROLE_NAME
	join PERMISSIONS_GROUP_PERMISSIONS pgp 
	on rpg.PERG_NAME = pgp.PERG_NAME
	where perm_name = 'VIEW_COMMISSION'

	update u set finance = 1 	
	from	#userInfo u
	join	USER_ROLES ur 
	on		u.NAME = ur.USR_NAME
	join ROLE_ORGANISATIONS ro 
	on ur.ROLE_NAME = ro.ROLE_NAME
	join ROLE_PERMISSION_GROUPS rpg 
	on ro.ROLE_NAME = rpg.ROLE_NAME
	join PERMISSIONS_GROUP_PERMISSIONS pgp 
	on rpg.PERG_NAME = pgp.PERG_NAME
	where perm_name = 'VIEW_FINANCE'

	update u set reports = 1 	
	from	#userInfo u
	join	USER_ROLES ur 
	on		u.NAME = ur.USR_NAME
	join ROLE_ORGANISATIONS ro 
	on ur.ROLE_NAME = ro.ROLE_NAME
	join ROLE_PERMISSION_GROUPS rpg 
	on ro.ROLE_NAME = rpg.ROLE_NAME
	join PERMISSIONS_GROUP_PERMISSIONS pgp 
	on rpg.PERG_NAME = pgp.PERG_NAME
	join PERMISSIONS p 
	on pgp.PERM_NAME = p.PERM_NAME
	where p.PERC_NAME = 'REPORTS'
	


	select	name as name,
			password as password,
			SUPPLIER as supplier,
			NETWORK as network,
			ADMIN as admin,
			FINANCE as finance,
			COMMISSION as commission,
			classical as classical,
			reports as reports

	from #userInfo
           
end
GO


