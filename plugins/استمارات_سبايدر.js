let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat] 
     if (/^menu$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◜🕷╎sρiɒєя◈◞*\n*❆──━━┈ ⊰⟐⊱ ┈━━──❆*\n*⇇اســتمارات ســبــايــدر⇉*\n*❋ ⋅ ┈─━ •◞❊◜• ━─┈ ⋅ ❋*\n*⟐001⇇اســــتــمــارة📄*\n*⟐002⇇اســتمارة خبر📮*\n*⟐003⇇اســتمارة كورة⚽️*\n*⟐004⇇وصف فرع نشر📜*\n*⟐005⇇اســتمارة صــور🪐*\n*⟐006⇇خــاتــمــة صــور🪐*\n*⟐007⇇اسـتمارة ملصقات🎭*\n*⟐008⇇خــاتــمه مــلصقات🎭*\n*⟐009⇇حــــقــوق🎭*\n*⟐010⇇وصــف فــرع📃*\n*⟐011⇇وصــف نــقابه🧾*\n*❋ ⋅ ┈─━ •◞❊◜• ━─┈ ⋅ ❋*\n*⟐⇇تقدر تطلب الاستمارة بالرقم وبالأسم⇉*\n*❆──━━┈ ⊰⟐⊱ ┈━━──❆*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
  if (/^استمارة خبر|002$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◜🕷╎sρiɒєя◈◞*\n*❋ ⋅ ┈─━━─┈📮┈─━━─┈ ⋅ ❋*\n\n*❋ ⋅ ┈─━━─┈📮┈─━━─┈ ⋅ ❋*\n*◜sρiɒєя𓆩📮𓆪иєωs◞*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
  }

  if (/^استمارة كوره|003$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◜🕷╎sρiɒєя◈◞*\n*❋ ⋅ ┈───┈⚽️┈───┈ ⋅ ❋*\n\n*❋ ⋅ ┈───┈⚽️┈───┈ ⋅ ❋*\n*◜sρiɒєя𓆩⚽𓆪sρσяτs◞*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
  if (/^وصف فرع نشر|004$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◈ ═══【🕷展開する🕷】═══ ◈*\n\n*◝👑◟╎الــمؤسس↜⌟viиi⌜*\n\n*◈ ════【❖】════ ◈*\n\n*❶┊ممنوع نشر اشياء تغضب الله*\n\n*❷┊ممنوع نشر رابط واحد خمس مرات مره واحده*\n\n*❸┊ممنوع انشاء محادثه*\n\n*❹┊ممنوع الذهاب للاعضاء في الخاص*\n\n*❺┊ممنوع السبام*\n\n*◈ ════【❖】════ ◈*\n\n*✧┇⬩⊰رابط الفرع🖇⊱⬩↓*\n``````\n*◈ ════【❖】════ `, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
  if (/^استمارة صور|005$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◜🕷╎sρiɒєя◈◞*\n*❆──━━┈ ⊰🪐⊱ ┈━━──❆*\n\n❐الطــــالـب📧⇇❮  ❯ \n*❋• ┈─━ ◞🕷◜ ━─┈ •❋*\n\n❐الطـــلــب📦⇇❮  ❯ \n*❋• ┈─━ ◞🕷◜ ━─┈ •❋*\n*◜sρiɒ`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
  if (/^006|خاتمة صور$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*❆──━━┈ ⊰🪐🔏⊱ ┈━━──❆*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
  if (/^007|استمارة ملصقات$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◜🕷╎sρiɒєя◈◞*\n*❆──━━┈ ⊰🎭⊱ ┈━━──❆*\n\n❐الطــــالـب📧⇇❮  ❯ \n*❋• ┈─━ ◞🕷◜ ━─┈ •❋*\n\n❐الطـــلــب📦⇇❮  ❯ \n*❋• ┈─━ ◞🕷◜ ━─┈ •❋*\n*◜sρiɒєя𓆩🎭𓆪sτicĸєяs◞* 🤔`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
   if (/^008|خاتمة ملصقات$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*❆──━━┈ ⊰🎭🔏⊱ ┈━━──❆*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
   if (/^حقوق ارثر$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `⚜╎sρiɒєя‹🎭›αяτнυя╎⚜`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
   if (/^حقوق فيني$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `⚜╎sρiɒєя‹🎭›viиi╎⚜`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
 if (/^009|حقوق$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `⚜╎sρiɒєя‹🎭›╎⚜`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
 if (/^وصف فرع$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*◜sρiɒєя𓆩𓆪◞*\n*❆━•✠•━━•﹝🕷﹞•━━•✠•━❆*\n*♚᚛|الـمسؤول🎖↜˼‏˹*\n*❋• ┈─━ •◞🕷◜• ━─┈ •❋*\n*◈┇↓✨*\n\n*❶〕*\n*❷〕*\n*❸〕*\n*❹〕*\n*❋• ┈─━ •◞🕷◜• ━─┈ •❋*\n*◈┇رابط الفرع↓🔗*\n\n``````\n*❆━•✠•━━•﹝🕷﹞•━━•✠•━❆*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
 if (/^حقوق جيو$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `⚜╎sρiɒєя‹🎭›ɢyυ╎⚜`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 }
return !0 }
export default handler
