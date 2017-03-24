WITH re AS (SELECT 
  re_stats_data.id,
  re_stats_data.statecode, 
  re_stats_data.msn, 
  re_stats_data.data,
  re_stats_data.year
  
FROM 
  public.re_stats_data
WHERE 
  re_stats_data.msn = 'RETCB'),

te AS (SELECT 
  re_stats_data.id,
  re_stats_data.statecode, 
  re_stats_data.msn, 
  re_stats_data.data,
  re_stats_data.year
  
FROM 
  public.re_stats_data
WHERE 
  re_stats_data.msn = 'TETCB')

SELECT 
re.statecode,
re.year,
re.data / te.data as re_over_te

FROM re,te
WHERE re.statecode = te.statecode AND re.year= te.year

  

  
