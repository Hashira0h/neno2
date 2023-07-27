let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^تع|تعداد$/i.test(m.text)) { 
     responses = [ 
'*⦃ ثلاثه ادميرال ⦄*',
'*⦃ ثلاثه دي ⦄*',
'*⦃ اربعه هوكاجي ⦄*',
'*⦃ اربعه قواد ⦄*',
'*⦃ ثلاثه تشيبوكاي ⦄*',
'*⦃ اربعه يونكو ⦄*',
'*⦃ اربعه هاشيرا ⦄*',
'*⦃ ثلاثه غيلان ⦄*',
'*⦃ اربعه عمالقه ⦄*',
'*⦃ ثلاثه اوتشيها ⦄*',
 ]; 
   }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
