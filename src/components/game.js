{\rtf1\ansi\ansicpg1251\cocoartf2578
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;\f1\fnil\fcharset0 AppleColorEmoji;}
{\colortbl;\red255\green255\blue255;\red183\green111\blue179;\red23\green23\blue23;\red202\green202\blue202;
\red140\green211\blue254;\red194\green126\blue101;\red70\green137\blue204;\red67\green192\blue160;\red212\green214\blue154;
\red109\green109\blue109;\red89\green138\blue67;}
{\*\expandedcolortbl;;\cssrgb\c77255\c52549\c75294;\cssrgb\c11765\c11765\c11765;\cssrgb\c83137\c83137\c83137;
\cssrgb\c61176\c86275\c99608;\cssrgb\c80784\c56863\c47059;\cssrgb\c33725\c61176\c83922;\cssrgb\c30588\c78824\c69020;\cssrgb\c86275\c86275\c66667;
\cssrgb\c50196\c50196\c50196;\cssrgb\c41569\c60000\c33333;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl360\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 React\cf4 \strokec4 , \{ \cf5 \strokec5 Component\cf4 \strokec4  \} \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 'react'\cf4 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 PageTitle\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '../components/h1'\cf4 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 MainText\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '../components/text'\cf4 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 SmallText\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '../components/smallText'\cf4 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 AccentText\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '../components/accentText'\cf4 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 Button\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '../components/button'\cf4 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 Tile\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '../components/tile'\cf4 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 GameSettings\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '../modules/gameSetting'\cf4 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 MusicSettings\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '../modules/musicSettings'\cf4 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 InputBlock\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '../modules/inputName'\cf4 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 GameField\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '../modules/gameField'\cf4 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 Coin\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '../components/coin'\cf4 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 Logo\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '../components/logo'\cf4 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 '../index.css'\cf4 \strokec4 ;\cb1 \
\
\pard\pardeftab720\sl360\partightenfactor0
\cf7 \cb3 \strokec7 class\cf4 \strokec4  \cf8 \strokec8 Game\cf4 \strokec4  \cf7 \strokec7 extends\cf4 \strokec4  \cf8 \strokec8 Component\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf9 \strokec9 render\cf4 \strokec4 () \{\cb1 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  (\cb1 \
\cb3       \cf10 \strokec10 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 className\cf4 \strokec4 =\cf6 \strokec6 "game-wrapper"\cf10 \strokec10 >\cf4 \cb1 \strokec4 \
\cb3         \cf10 \strokec10 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 className\cf4 \strokec4 =\cf6 \strokec6 "game-top-panel"\cf10 \strokec10 >\cf4 \cb1 \strokec4 \
\cb3           \cf10 \strokec10 <\cf8 \strokec8 PageTitle\cf4 \strokec4  \cf5 \strokec5 label\cf4 \strokec4 =\cf6 \strokec6 "Mine Hard Like the Devil\cf7 \strokec7 &nbsp;
\f1 \cf6 \strokec6 \uc0\u55357 \u56441 
\f0 "\cf4 \strokec4  \cf10 \strokec10 />\cf4 \cb1 \strokec4 \
\cb3           \cf10 \strokec10 <\cf8 \strokec8 Button\cf4 \strokec4  \cf5 \strokec5 label\cf4 \strokec4 =\cf6 \strokec6 "Restart"\cf4 \strokec4  \cf10 \strokec10 />\cf4 \cb1 \strokec4 \
\cb3         \cf10 \strokec10 </\cf7 \strokec7 div\cf10 \strokec10 >\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 \{\cf11 \strokec11 /* <MainText label="UserName, you\'92ve mined 45BTC and you have 24 sec to go." /> */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3         \cf10 \strokec10 <\cf8 \strokec8 GameField\cf4 \strokec4  \cf10 \strokec10 />\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 \{\cf11 \strokec11 /* <div className="subtitle"> */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 \{\cf11 \strokec11 /* <AccentText label="Tap as hard, as you can" /> */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 \{\cf11 \strokec11 /* </div> */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3       \cf10 \strokec10 </\cf7 \strokec7 div\cf10 \strokec10 >\cf4 \cb1 \strokec4 \
\cb3     );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 default\cf4 \strokec4  \cf8 \strokec8 Game\cf4 \strokec4 ;\cb1 \
\
}