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
drop PROCEDURE PR_GET_ORGANISATIONS
go
/****** Object:  StoredProcedure [dbo].[PR_GET_ORGANISATIONS]    Script Date: 01/01/2018 16:52:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[PR_GET_ORGANISATIONS]
	@type varchar(50) = null
as
begin
	declare @date datetime
	set @date = getdate()

	if @type = 'open' 
	 begin
		select  distinct 
				cr.org_organisation_id,
				org.org_description 
		from	COMMISSIONING_ROUNDS cr
		join	ORGANISATIONS org 
		on		cr.ORG_ORGANISATION_ID = org.ORG_ORGANISATION_ID
		where	cr_closing_sub_date > @date 
		order by org.org_description
	 end
	 if @type = 'network' 
	 begin
		select  distinct 
				org.org_organisation_id,
				org.org_description 
		from	ORGANISATIONS org 
		where	ORG_ORGANISATION_TYPE = 'N'
		order by org.org_description
	 end
	 if @type = 'indie' 
	 begin
		select  distinct 
				org.org_organisation_id,
				org.org_description 
		from	ORGANISATIONS org 
		where	ORG_ORGANISATION_TYPE = 'I'
		order by org.org_description
	 end
	if @type = 'production' 
	 begin
		select  distinct 
				org.org_organisation_id,
				org.org_description 
		from	ORGANISATIONS org 
		where	ORG_ORGANISATION_TYPE = 'DE'
		or		ORG_ORGANISATION_TYPE = 'DG'
		order by org.org_description
	 end
	 if @type is null
	 begin
		select  distinct 
				org.org_organisation_id,
				org.org_description 
		from	ORGANISATIONS org 
		order by org.org_description
	 end
end

