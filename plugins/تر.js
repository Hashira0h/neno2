let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^تر$/i.test(m.text)) { 
     responses = [ 
'*⧼ ي ر ن و غ ك و ⧽*',
'*⧼ ت ن ي و ج ا ر ⧽*',
'*⧼ ي ش و ن ب و  ⧽*',
'*⧼ ا ر ا ي ز ⧽*',
'*⧼ ن ه ج ا ي ⧽*',
'*⧼ ن ي ز ي س و ت ⧽*',
'*⧼ ي ن و ك س ا ي ⧽*',
'*⧼ ي ف ا ل ي ⧽*',
'*⧼ ا ك ك ش ا ي ⧽*',
'*⧼ ر ا و ن ت و  ⧽*',
'*⧼ ن ج ا س ف ن ⧽*',
'*⧼ ي ا ي م ⧽*',
'*⧼ ي س ه ت و ي ا ر ⧽*',
'*⧼ ك س ي ا م ا ⧽*',
'*⧼ س ا ت ا ⧽*',
'*⧼ ي ل و م د ا س ⧽*',
'*⧼ ل ي ز ي ب ا ث ا ⧽*',
'*⧼ و ك و غ ⧽*',
'*⧼ ت غ و ن ي ⧽*',
'*⧼ ه غ ا ن و ⧽*',
'*⧼ ي ف ج ي ا ت ⧽*',
'*⧼ ي و ب ر س ⧽*',
'*⧼ ك ي و ر ا ⧽*',
'*⧼ س ن ا ي م ي ⧽*',
'*⧼ س ن ج ي ا ⧽*',
'*⧼ ي ز ا ن ⧽*',
'*⧼ ا ن ا ي و ك ج ي و ⧽*',
'*⧼ ل و ا ي ك ⧽*',
'*⧼ ا ن ي ك ي ك ⧽*',
'*⧼ ا ك ت و ⧽*',
'*⧼ ت ي ش و ي ف و ⧽*',
'*⧼ ا س و ن م ن ا ي و ر ج ⧽*',
'*⧼ ك ا ي ك ي س ت ا ي ت ⧽*',
    ]; 
   }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
