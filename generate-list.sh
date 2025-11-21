#!/bin/bash

# 1. Ga naar de tiles map (of stop als die niet bestaat)
cd tiles || { echo "❌ Map 'tiles' niet gevonden!"; exit 1; }

# 2. Zoek alle HTML bestanden
# - ls *.html     : Lijst alle html bestanden
# - grep -v "^_"  : Filter regels weg die beginnen met een laagstreepje (template)
# - > ../filelist : Schrijf naar bestand in mapje hoger
ls *.html | grep -v "^_" > ../filelist.txt

# 3. Ga terug en meld succes
cd ..
echo "✅ filelist.txt is succesvol bijgewerkt!"