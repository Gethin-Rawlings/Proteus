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
/****** Object:  StoredProcedure [dbo].[PR_GET_OPEN_ROUNDS]    Script Date: 01/01/2018 15:18:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
alter procedure [dbo].[PR_GET_ORGANISATIONS]
	@organisationType varchar(50)
as
begin
	declare @date datetime
	set @date = getdate()

	if @organisationType = 'open' 
	 begin
		select  distinct 
				cr.org_organisation_id,
				org.org_description 
		from	COMMISSIONING_ROUNDS cr
		join	ORGANISATIONS org 
		on		cr.ORG_ORGANISATION_ID = org.ORG_ORGANISATION_ID
		where	cr_closing_sub_date > @date 
	 end
	 if @organisationType = 'network' 
	 begin
		select  distinct 
				org.org_organisation_id,
				org.org_description 
		from	ORGANISATIONS org 
		where	ORG_ORGANISATION_TYPE = 'N'
	 end
	 if @organisationType = 'indie' 
	 begin
		select  distinct 
				org.org_organisation_id,
				org.org_description 
		from	ORGANISATIONS org 
		where	ORG_ORGANISATION_TYPE = 'I'
	 end
	if @organisationType = 'production' 
	 begin
		select  distinct 
				org.org_organisation_id,
				org.org_description 
		from	ORGANISATIONS org 
		where	ORG_ORGANISATION_TYPE = 'DE'
		or		ORG_ORGANISATION_TYPE = 'DG'
	 end
	 if @organisationType = 'all' 
	 begin
		select  distinct 
				org.org_organisation_id,
				org.org_description 
		from	ORGANISATIONS org 
	 end
end

