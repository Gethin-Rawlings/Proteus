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
/****** Object:  StoredProcedure [dbo].[PR_GET_BRIEFS]    Script Date: 01/01/2018 10:38:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_GET_BRIEFS]
    @organisation int,
    @year int,
    @round int,
	@PARAMS nvarchar(max)
as
begin

    set nocount on
    
	select	cb.CB_NUMBER,
			cb.CB_DESCRIPTION,
			cb.CB_NOT_FOR_COMMISSIONING,
			crb.CBY_COMMISSIONING_EDITOR
	from	COMMISSIONING_BRIEFS cb
	join	COMMISSIONING_BRIEF_YEARS cby
	on		cb.CB_NUMBER = cby.CB_NUMBER
	join	COMM_ROUND_BRIEFS crb on cby.CBY_NUMBER = crb.CBY_NUMBER
	where	crb.ORG_ORGANISATION_ID = @organisation
	and		crb.CR_ROUND = @round
	and		crb.CR_YEAR = @year 
           
end
