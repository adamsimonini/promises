Create an application that makes two API calls to https://api.spacexdata.com and displays the data in a curated way to the user. You may choose how to display the data.

The first call hits the missions endpoint. You'll want to collect each mission's name, along with the payload ids.

The second call hits the payload endpoint. From these results you'll want to extract the customer and nationality for each payload.

Hints

1) You may want to use Array.propotype.map on the returned results, to store only the data you're interested in.

2) After the first API call, you'll have a list of missions. Mission's can have multiple payloads, so be sure to loop through the payloads when making API calls

3) You'll want to ensure the first API call comes in before you send the second one

Example

Mission: Iridium Next 
Payloads: 
    1) Iridium NEXT 1, DARPA, United States

Mission: Thaicom
Payloads: 
    1) Thaicom 6, Thaicom, Thailand
    2) Thaicom 8, Thaicom, Thailand