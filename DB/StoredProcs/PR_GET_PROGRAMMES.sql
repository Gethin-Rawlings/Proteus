
USE [Proteustraining]
GO
drop PROCEDURE [dbo].[PR_GET_PROGRAMMES]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON        
GO
create PROCEDURE [dbo].[PR_GET_PROGRAMMES]
    @production int =null,
    @network int =null,
    @indie int =null,
    @title varchar(500)=null
as
begin

    set nocount on

select  prg.prg_programme_number as [programmeNumber],
        ps.ps_sequence as [sequence],
        prg.ORG_OWNING_ORG_ID as [Supplier],
        ps.ORG_ORGANISATION_ID as [Network],
        prg.PRG_TITLE as [ProgrammeTitle],
        prg.EPI_CRID as [EPI_CRID],
        ps.PS_DURATION as [duration],
        ps.PS_SCHEDULED_TIME as [scheduledTime]

from    programmes prg 
join    PROGRAMME_SCHEDULE ps
ON      prg.PRG_PROGRAMME_NUMBER = ps.PRG_PROGRAMME_NUMBER

WHERE   ps.PS_SEQUENCE <> 'zzz' 
       
end
