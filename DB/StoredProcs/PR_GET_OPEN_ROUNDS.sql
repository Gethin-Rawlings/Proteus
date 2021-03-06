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
/****** Object:  StoredProcedure [dbo].[PR_GET_OPEN_ROUNDS]    Script Date: 01/01/2018 09:56:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER procedure [dbo].[PR_GET_OPEN_ROUNDS]
	@date datetime,
	@org int = null,
	@year int = null

as
begin
 
 if @org is null 
 begin
	select  distinct 
			cr.org_organisation_id,
			org.org_description 
	from	COMMISSIONING_ROUNDS cr
	join	ORGANISATIONS org 
	on		cr.ORG_ORGANISATION_ID = org.ORG_ORGANISATION_ID
	where	cr_closing_sub_date > @date 
 end
end

