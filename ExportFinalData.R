#### ExportFinalData.R ####
# 
# Input:
# Complete_SEDS.csv downloaded from: http://www.eia.gov/state/seds/CDF/Complete_SEDS.csv
#
# Output:
# FinalData.csv


#Install reshape
install.packages("reshape")

#Set work directory
setwd("C:/Users/bscully/Desktop/Renewable Energy")

#Define final data set
FinalSelection <- c("StateCode",
                    "Year",
                    "Data.TETCB",
                    "Data.FFTCB",
                    "Data.CLTCB",
                    "Data.NNTCB",
                    "Data.PMTCB",
                    "Data.NUETB",
                    "Data.RETCB",
                    "Data.EMLCB",
                    "Data.EMTCB",
                    "Data.GETCB",
                    "Data.HYTCB",
                    "Data.SOTCB",
                    "Data.WWTCB",
                    "Data.WYTCB",
                    "Data.ELNIB",
                    "Data.ELISB")

#Build final data set
CompleteSEDS = read.csv("Complete_SEDS.csv", header = TRUE)

tempSEDS <- CompleteSEDS[2:5]
tempSEDS <- reshape(tempSEDS, idvar=c("StateCode", "Year"), timevar="MSN", direction="wide")
finalSEDS <- tempSEDS[FinalSelection]

write.csv(finalSEDS, file="FinalData.csv", row.names=FALSE)
