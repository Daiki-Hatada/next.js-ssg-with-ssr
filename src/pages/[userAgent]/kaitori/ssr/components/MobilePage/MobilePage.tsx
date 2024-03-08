export const MobilePage = () => {
  return (
    <>
      <div id='wrapper'>
        <div id='container'>
          <div id='inner_container'>
            {/*****************************************
  オリジナルコードここから
*****************************************/}
            {/* 看板 */}
            <div id='car-kaitori-top' className='relative'>
              <h2>
                <img
                  src='/sys_images/ktr01/kaitori_sp.png'
                  alt='車一括査定もwebike！全国20社を超える買取店のうち最大７社が一括査定！あなたの愛車の最高額がわかる！'
                />
              </h2>
              <p>
                <a href='./inquiry/' className='kaitori-btn'>
                  <img src='/sys_images/ktr01/kaitori_sp.png' alt='無料一括査定スタート！' />
                </a>
              </p>
              <p></p>
            </div>
            {/* 車一括査定の流れ */}
            <div className='section'>
              <h3 className='section-header'>
                <span>車一括査定の流れ</span>
              </h3>
              <ol id='flow-list1' className='w105 clearfix'>
                <li className='list1 tile_a'>
                  <h4>
                    <span>情報を入力</span>
                  </h4>
                  <p className='sp-img'>
                    <img src='/sys_images/ktr01/kaitori_sp.png' alt='情報を入力' />
                  </p>
                  <p>車一括査定お申込みフォームより愛車とお客様の情報をお送り下さい。</p>
                </li>
                <li className='list2 tile_a'>
                  <h4>
                    <span>一括査定スタート</span>
                  </h4>
                  <p className='sp-img'>
                    &gt;
                    <img src='/sys_images/ktr01/kaitori_sp.png' alt='一括査定スタート' />
                  </p>
                  <p>
                    ご入力いただいた登録情報に基づいて、20社を超える各中古車査定会社のうち、最大７社が査定を開始します。
                  </p>
                </li>
                <li className='list3 tile_a'>
                  <h4>
                    <span>査定結果をご報告</span>
                  </h4>
                  <p className='sp-img'>
                    &gt;
                    <img src='/sys_images/ktr01/kaitori_sp.png' alt='査定結果をご報告' />
                  </p>
                  <p>
                    原則24時間以内に、対応可能な査定会社よりメールまたは電話にて、おおよその買取査定額や出張査定のご案内などをご連絡いたします。
                  </p>
                </li>
                <li className='list4 tile_a'>
                  <h4>
                    <span>比較して最高額で売却</span>
                  </h4>
                  <p className='sp-img'>
                    &gt;
                    <img src='/sys_images/ktr01/kaitori_sp.png' alt='比較して最高額で売却' />
                  </p>
                  <p>
                    各社からの買取査定額を比較したらより高額で売却する為に各社が無料で実施している「出張買取査定」を利用して、愛車のアピールポイントを伝えましょう。
                  </p>
                </li>
              </ol>
              <p>
                <a href='./inquiry/' className='kaitori-btn'>
                  <img
                    src='/sys_images/ktr01/kaitori_sp.png'
                    alt='お申込み簡単！60秒で入力完了！無料一括査定申込フォームへ'
                  />
                </a>
              </p>
            </div>
            {/* まかせて安心！一括査定買取ネットワーク */}
            <div className='section mt40'>
              <h3 className='section-header'>
                <span>まかせて安心！一括査定買取ネットワーク</span>
              </h3>
              <p>
                実績ある自動車買取専門店、23社の中でも特にあなたのお車を高く買える企業「最大7社」が査定します。そのため、簡単に最高買取価格が分かります。当サービスの提携査定会社は一般社団法人「日本自動車流通研究所（ＪＡＤＲＩ）」に加盟している優良企業のみ。
                日本自動車流通研究所には、テレビＣＭでおなじみの企業や、ビンテージカーの取扱いが得意な企業・輸入車が得意な企業など多数の企業が加盟しており、様々な車種の買取に対応できます。
              </p>
              <p id='teikei-ichiran'>
                <img src='/sys_images/ktr01/kaitori_sp.png' alt='提携大手買取店一覧です。' />
              </p>
              <dl id='teikei-trouble'>
                <dt>
                  中古車買取トラブルセンター(JPUC)<span>0120-93-4595</span>
                </dt>
                <dd>
                  中古車買取において、何かお困りの事、相談したいことがございましたら「JPUC
                  中古車買取トラブルセンター」へご連絡下さい。
                  <br />
                  ※査定予約の取り消し、アポイントの変更やキャンセルのご連絡は、直接お申し込み企業様にお電話にてご連絡下さい。
                </dd>
              </dl>
              <p>
                <a href='./inquiry/' className='kaitori-btn'>
                  <img
                    src='/sys_images/ktr01/kaitori_sp.png'
                    alt='お申込み簡単！60秒で入力完了！無料一括査定申込フォームへ'
                  />
                </a>
              </p>
            </div>
            {/* よくいただくご質問 */}
            <div className='section mt40'>
              <h3 className='section-header'>
                <span>よくいただくご質問</span>
              </h3>
              <dl id='qanda'>
                <dt className='clearfix'>
                  <span className='question'>一括査定に申し込んだ後の流れは？</span>
                  <span className='toggle-btn'>　</span>
                </dt>
                <dd>
                  <p>
                    一括査定に申込みをされると、その後まず車を買取可能な買取業者から概算査定額の連絡がとどきます。この時点で一番高い査定額を提示している業者に売却をされるのも良いですが、年頭においていただきたいのは、提示された金額は概算だという事です。できればその後、複数の業者に現車確認をしてもらい、実際の買取金額を見積もってもらうことをおすすめします。希望の買取金額がある場合や修復歴がある、アピールしたいところがあるという場合は積極的に伝えておきましょう。見積が出そろったら、あとは売却先を決めるだけです。売却に必要な書類や手続きをお店の方としっかり確認して売却を進めてください。
                  </p>
                </dd>
                <dt className='clearfix'>
                  <span className='question'>一括査定のメリットとデメリットはなんですか？</span>
                  <span className='toggle-btn'>　</span>
                </dt>
                <dd>
                  <p>
                    一括査定のメリットは、一度のお申込みで複数の買取業者から査定額を調べることができることが挙げられます。一つひとつの業者に実際に出向いたり電話をしたりしながら相見積もりをしようすると、どうしても時間も手間もかかってしまいます。ですが一括査定であれば1分程度の入力で簡単に最高査定額を出してくれる業者を調べることができるのです。さらに複数の業者が競争して査定金額をつけるので自然と査定額が上がりやすくなります。反対にデメリットとしては、最低限査定に必要な情報しか渡していないために、どうしても概算の見積しか出ないという事です。電話やメールなどで詳細な車の状態を伝えたり、現車を確認して査定してもらうことは必須と言えるでしょう。
                  </p>
                </dd>
                <dt className='clearfix'>
                  <span className='question'>キズは査定の前に直しておいた方がいいですか？</span>
                  <span className='toggle-btn'>　</span>
                </dt>
                <dd>
                  <p>
                    キズは直さずそのまま査定に出すことをお勧めします。キズを修理したからといって査定金額がアップするという事はほとんどありません。むしろ修理費用が買取金額を上回ってしまうということもありえます。また、過去にキズを修理したことがあるという場合は、査定の際にあらかじめ修復歴があるという事をできるだけ伝えておく方が良いでしょう。どこを修復しているかはプロの査定士の方から見るとすぐにわかるものです、修理をしていたことを隠していたと思われてしまうと不信感を高めてしまい、結果的に査定も厳しくなってしまうことが考えられます。その車の状態を素直に隠さず伝えることが効果買取のポイントだと言えるでしょう。
                  </p>
                </dd>
                <dt className='clearfix'>
                  <span className='question'>査定前にやっておいた方がいいことはなんですか？</span>
                  <span className='toggle-btn'>　</span>
                </dt>
                <dd>
                  <p>
                    査定を受ける前に是非おすすめしたいのが「清掃」です。少しでも高く売りたいという事であれば、査定の前に洗車と社内やトランクルームの掃除をしてみてください。車の中でたばこを吸う、ペットを乗せるという方は「臭い」も要注意です。日常的に乗っていると自分ではなかなか気づかないものですが、たばこやペットの臭いが社内に残ってしまっていないか確認しましょう。しっかりと換気を行ったり、市販の消臭スプレーなどを使用して臭い対策も念入りに行ってください。場合によっては臭いが原因で査定額が下がってしまうという事もあるのです。
                  </p>
                </dd>
                <dt className='clearfix'>
                  <span className='question'>車検がもうすぐ切れる場合は更新した方がいいですか？</span>
                  <span className='toggle-btn'>　</span>
                </dt>
                <dd>
                  <p>
                    車検の残期間の長い車の方が確かに高く買取されますが、車検が残り少ないからといってわざわざ売却前に車検を取る必要はないでしょう。車検を取ってから売却をしたことで査定金額が上がったとしても、車検にかかった費用を引くとそこまで変わらない、むしろ－になってしまうという事もあり得ます。ただ、査定に出す際に後1、2週間で車検が切れるという状態は避けた方が良いでしょう。車検が切れてしまうと車は公道を走ることができませんので、そのような車は、中古車販売業者などが参加するオークションでも落札の優先度が下がってしまうため、買取金額にも影響が出てしまいます。なるべく車検は2ヶ月以上は残っている状態で売却されることをおすすめします。
                  </p>
                </dd>
                <dt className='clearfix'>
                  <span className='question'>車を売るときに必要なものは？</span>
                  <span className='toggle-btn'>　</span>
                </dt>
                <dd>
                  <p>
                    車の売却には様々な書類が必要になります。ここでは事前に準備が必要な書類についてご紹介します。まず、査定の際には“自動車検査証(車検証)”“自賠責保険証書”が必要です。この２つの書類は運転時も携行が義務付けられているので多くのドライバーさんは、助手席のグローブボックスなどにいれていらっしゃるのではないでしょうか。売却の際には、上の２つの書類の他に、“自動車納税証明書”“印鑑証明”が必要になります。その他に必要な書類についても店員の方とよく相談して準備を進めましょう。書類によっては有効期限が決まっているものもあるので、手際よくスムーズに進めるのがポイントです。
                  </p>
                </dd>
              </dl>
              <p>
                <a href='./inquiry/' className='kaitori-btn'>
                  <img
                    src='/sys_images/ktr01/kaitori_sp.png'
                    alt='お申込み簡単！60秒で入力完了！無料一括査定申込フォームへ'
                  />
                </a>
              </p>
            </div>
            <div id='car-kaitori-footer'>
              <ul className='clearfix'>
                <li>
                  <a href='#'>運営会社</a>
                </li>
                <li>
                  <a href='#'>利用規約</a>
                </li>
                <li>
                  <a href='#'>プライバシーポリシー</a>
                </li>
              </ul>
            </div>
            {/*****************************************
  オリジナルコードここまで
*****************************************/}
          </div>
          {/* /#inner_container */}
        </div>
        {/* /#container */}
      </div>
      <style jsx>{`
        /* CSS Document */

        /*　ベース
==================================================*/
        * {
          margin: 0;
          padding: 0;
          word-break: break-all;
          list-style: none;
        }
        body {
          font-family: 'ＭＳ Ｐゴシック', 'MS PGothic', 'メイリオ', Meiryo, Osaka, sans-serif;
          /*'meiryo','メイリオ','ms pgothic','ms pゴシック',osaka,sans-serif*/
          font-size: 12px;
          padding: 0;
          margin: 0 !important;
          text-align: left !important;
        }
        img {
          border: none;
        }

        /*　リンクカラー
==================================================*/
        a {
          color: #416090;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
          color: #416090;
        }
        a:visited {
          color: #416090;
        }

        /* CSS Document */

        /*　common_リセット指定
==================================================*/
        a:hover img {
          filter: alpha(opacity=100) !important;
          -moz-opacity: 1 !important;
          opacity: 1 !important;
        }

        /*　common_レイアウト指定
==================================================*/
        .floatleft {
          float: left !important;
        }
        .floatright {
          float: right !important;
        }
        .left {
          text-align: left !important;
        }
        .center {
          text-align: center !important;
        }
        .right {
          text-align: right !important;
        }
        .top {
          display: table-cell !important;
          vertical-align: top !important;
        }
        .middle {
          display: table-cell !important;
          vertical-align: middle !important;
        }
        .bottom {
          display: table-cell !important;
          vertical-align: bottom !important;
        }
        .relative {
          position: relative !important;
        }
        .absolute {
          position: absolute !important;
        }
        .block {
          display: block !important;
        }
        .inlineblock {
          display: inline-block !important;
          *display: inline !important;
          *zoom: 1 !important;
        }
        .inline {
          display: inline-block !important;
        }
        .w105 {
          width: 105%;
        }

        /*　common_文字指定
==================================================*/
        .xxlarge {
          font-size: 1.5em !important;
        }
        .xlarge {
          font-size: 1.3em !important;
        }
        .large {
          font-size: 1.1em !important;
        }
        .small {
          font-size: 0.9em !important;
        }
        .xsmall {
          font-size: 0.8em !important;
        }
        .xxsmall {
          font-size: 0.7em !important;
        }
        .lh20 {
          line-height: 2 !important;
        }
        .lh18 {
          line-height: 1.8 !important;
        }
        .lh15 {
          line-height: 1.5 !important;
        }
        .lh12 {
          line-height: 1.2 !important;
        }
        .lh10 {
          line-height: 1 !important;
        }
        .bold {
          font-weight: bold !important;
        }
        .normal {
          font-weight: normal !important;
        }

        /*　common_マージン指定
==================================================*/
        .m0 {
          margin: 0 !important;
        }
        .m5 {
          margin: 5px !important;
        }
        .m10 {
          margin: 10px !important;
        }
        .m15 {
          margin: 15px !important;
        }
        .m20 {
          margin: 20px !important;
        }
        .m25 {
          margin: 25px !important;
        }
        .m30 {
          margin: 30px !important;
        }
        .m35 {
          margin: 35px !important;
        }
        .m40 {
          margin: 40px !important;
        }
        .m45 {
          margin: 45px !important;
        }
        .m50 {
          margin: 50px !important;
        }
        .mt0 {
          margin-top: 0 !important;
        }
        .mt5 {
          margin-top: 5px !important;
        }
        .mt10 {
          margin-top: 10px !important;
        }
        .mt15 {
          margin-top: 15px !important;
        }
        .mt20 {
          margin-top: 20px !important;
        }
        .mt25 {
          margin-top: 25px !important;
        }
        .mt30 {
          margin-top: 30px !important;
        }
        .mt35 {
          margin-top: 35px !important;
        }
        .mt40 {
          margin-top: 40px !important;
        }
        .mt45 {
          margin-top: 45px !important;
        }
        .mt50 {
          margin-top: 50px !important;
        }
        .mr0 {
          margin-right: 0 !important;
        }
        .mr5 {
          margin-right: 5px !important;
        }
        .mr10 {
          margin-right: 10px !important;
        }
        .mr15 {
          margin-right: 15px !important;
        }
        .mr20 {
          margin-right: 20px !important;
        }
        .mr25 {
          margin-right: 25px !important;
        }
        .mr30 {
          margin-right: 30px !important;
        }
        .mr35 {
          margin-right: 35px !important;
        }
        .mr40 {
          margin-right: 40px !important;
        }
        .mr45 {
          margin-right: 45px !important;
        }
        .mr50 {
          margin-right: 50px !important;
        }
        .mb0 {
          margin-bottom: 0 !important;
        }
        .mb5 {
          margin-bottom: 5px !important;
        }
        .mb10 {
          margin-bottom: 10px !important;
        }
        .mb15 {
          margin-bottom: 15px !important;
        }
        .mb20 {
          margin-bottom: 20px !important;
        }
        .mb25 {
          margin-bottom: 25px !important;
        }
        .mb30 {
          margin-bottom: 30px !important;
        }
        .mb35 {
          margin-bottom: 35px !important;
        }
        .mb40 {
          margin-bottom: 40px !important;
        }
        .mb45 {
          margin-bottom: 45px !important;
        }
        .mb50 {
          margin-bottom: 50px !important;
        }
        .ml0 {
          margin-left: 0 !important;
        }
        .ml5 {
          margin-left: 5px !important;
        }
        .ml10 {
          margin-left: 10px !important;
        }
        .ml15 {
          margin-left: 15px !important;
        }
        .ml20 {
          margin-left: 20px !important;
        }
        .ml25 {
          margin-left: 25px !important;
        }
        .ml30 {
          margin-left: 30px !important;
        }
        .ml35 {
          margin-left: 35px !important;
        }
        .ml40 {
          margin-left: 40px !important;
        }
        .ml45 {
          margin-left: 45px !important;
        }
        .ml50 {
          margin-left: 50px !important;
        }

        /*　common_パディング指定
==================================================*/
        .p0 {
          padding: 0 !important;
        }
        .p5 {
          padding: 5px !important;
        }
        .p10 {
          padding: 10px !important;
        }
        .p15 {
          padding: 15px !important;
        }
        .p20 {
          padding: 20px !important;
        }
        .p25 {
          padding: 25px !important;
        }
        .p30 {
          padding: 30px !important;
        }
        .p35 {
          padding: 35px !important;
        }
        .p40 {
          padding: 40px !important;
        }
        .p45 {
          padding: 45px !important;
        }
        .p50 {
          padding: 50px !important;
        }
        .pt0 {
          padding-top: 0 !important;
        }
        .pt5 {
          padding-top: 5px !important;
        }
        .pt10 {
          padding-top: 10px !important;
        }
        .pt15 {
          padding-top: 15px !important;
        }
        .pt20 {
          padding-top: 20px !important;
        }
        .pt25 {
          padding-top: 25px !important;
        }
        .pt30 {
          padding-top: 30px !important;
        }
        .pt35 {
          padding-top: 35px !important;
        }
        .pt40 {
          padding-top: 40px !important;
        }
        .pt45 {
          padding-top: 45px !important;
        }
        .pt50 {
          padding-top: 50px !important;
        }
        .pr0 {
          padding-right: 0 !important;
        }
        .pr5 {
          padding-right: 5px !important;
        }
        .pr10 {
          padding-right: 10px !important;
        }
        .pr15 {
          padding-right: 15px !important;
        }
        .pr20 {
          padding-right: 20px !important;
        }
        .pr25 {
          padding-right: 25px !important;
        }
        .pr30 {
          padding-right: 30px !important;
        }
        .pr35 {
          padding-right: 35px !important;
        }
        .pr40 {
          padding-right: 40px !important;
        }
        .pr45 {
          padding-right: 45px !important;
        }
        .pr50 {
          padding-right: 50px !important;
        }
        .pb0 {
          padding-bottom: 0 !important;
        }
        .pb5 {
          padding-bottom: 5px !important;
        }
        .pb10 {
          padding-bottom: 10px !important;
        }
        .pb15 {
          padding-bottom: 15px !important;
        }
        .pb20 {
          padding-bottom: 20px !important;
        }
        .pb25 {
          padding-bottom: 25px !important;
        }
        .pb30 {
          padding-bottom: 30px !important;
        }
        .pb35 {
          padding-bottom: 35px !important;
        }
        .pb40 {
          padding-bottom: 40px !important;
        }
        .pb45 {
          padding-bottom: 45px !important;
        }
        .pb50 {
          padding-bottom: 50px !important;
        }
        .pl0 {
          padding-left: 0 !important;
        }
        .pl5 {
          padding-left: 5px !important;
        }
        .pl10 {
          padding-left: 10px !important;
        }
        .pl15 {
          padding-left: 15px !important;
        }
        .pl20 {
          padding-left: 20px !important;
        }
        .pl25 {
          padding-left: 25px !important;
        }
        .pl30 {
          padding-left: 30px !important;
        }
        .pl35 {
          padding-left: 35px !important;
        }
        .pl40 {
          padding-left: 40px !important;
        }
        .pl45 {
          padding-left: 45px !important;
        }
        .pl50 {
          padding-left: 50px !important;
        }

        /*==================================================
　以下、ページ設定
==================================================*/

        /*　共通設定
==================================================*/
        .box {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          -o-box-sizing: border-box;
          -ms-box-sizing: border-box;
          box-sizing: border-box;
        }

        /*　kaitori
==================================================*/
        #car-kaitori-top h2 {
          position: relative;
          overflow: hidden;
          display: block;
          width: 800px;
          height: 327px;
        }
        #car-kaitori-top h2 img {
          position: absolute;
          top: 0;
          left: 0;
        }
        #car-kaitori-top p {
          position: absolute;
          bottom: 10px;
          right: 15px;
        }
        #car-kaitori-top .kaitori-btn {
          position: relative;
          overflow: hidden;
          display: block;
          width: 411px;
          height: 123px;
        }
        #car-kaitori-top .kaitori-btn img {
          position: absolute;
          top: 0;
          left: -810px;
        }
        #car-kaitori-top .kaitori-btn:hover img {
          top: -130px;
        }
        #wrapper #container .section-header {
          border-bottom: #ccc 1px solid;
          background-image: none;
          background: #ebebeb;
          background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ebebeb));
          background: -moz-linear-gradient(top, #fff, #ebebeb);
          background: -ms-linear-gradient(top, #fff, #ebebeb);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#EBEBEB',GradientType=0);
          text-indent: 0;
          height: auto;
          margin: 15px 0 10px 0;
        }
        #wrapper #container .section-header span {
          border: #ccc 1px solid;
          border-bottom: #59ade7 3px solid;
          display: block;
          color: #135e93;
          font-size: 18px;
          font-weight: bold;
          line-height: 1;
          padding: 14px 15px;
        }

        #flow-list1 li {
          float: left;
          width: 184px;
          border: #e6e6e6 3px solid;
          margin: 5px 13px 0 0;
        }
        #flow-list1 h4 {
          background-image: none;
          background: #207bc8;
          background: -webkit-gradient(linear, left top, left bottom, from(#3bb5eb), to(#207bc8));
          background: -moz-linear-gradient(top, #3bb5eb, #207bc8);
          background: -ms-linear-gradient(top, #3bb5eb, #207bc8);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3BB5EB', endColorstr='#207BC8',GradientType=0);
          padding: 7px 8px;
        }
        #flow-list1 h4 span {
          color: #fff;
          font-size: 15px;
          display: inline-block;
          min-height: 20px;
          font-weight: bold;
          padding-left: 25px;
        }
        #flow-list1 .list1 h4 span {
          background: url('/sys_images/ktr01/icon/icon_1.png') no-repeat left center;
        }
        #flow-list1 .list2 h4 span {
          background: url('/sys_images/ktr01/icon/icon_2.png') no-repeat left center;
        }
        #flow-list1 .list3 h4 span {
          background: url('/sys_images/ktr01/icon/icon_3.png') no-repeat left center;
        }
        #flow-list1 .list4 h4 span {
          background: url('/sys_images/ktr01/icon/icon_4.png') no-repeat left center;
          letter-spacing: -2px;
        }
        #flow-list1 p {
          margin: 7px 9px;
        }
        #flow-list1 .sp-img {
          position: relative;
          overflow: hidden;
          display: block;
          width: 167px;
          height: 111px;
          margin: 10px auto 7px auto;
        }
        #flow-list1 .list1 .sp-img img {
          position: absolute;
          top: -500px;
          left: -820px;
        }
        #flow-list1 .list2 .sp-img img {
          position: absolute;
          top: -500px;
          left: -1000px;
        }
        #flow-list1 .list3 .sp-img img {
          position: absolute;
          top: -620px;
          left: -820px;
        }
        #flow-list1 .list4 .sp-img img {
          position: absolute;
          top: -620px;
          left: -1000px;
        }

        .section .kaitori-btn {
          position: relative;
          overflow: hidden;
          display: block;
          width: 573px;
          height: 107px;
          margin: 20px 75px;
        }
        .section .kaitori-btn img {
          position: absolute;
          top: -260px;
          left: -810px;
        }
        .section .kaitori-btn:hover img {
          top: -380px;
        }

        .section #teikei-ichiran {
          position: relative;
          overflow: hidden;
          display: block;
          width: 791px;
          height: 324px;
          margin: 25px 0;
        }
        .section #teikei-ichiran img {
          position: absolute;
          top: -330px;
          left: 0;
        }
        .section #teikei-trouble {
          background: #d7effa;
          padding: 15px;
        }
        .section #teikei-trouble dt {
          color: #135e92;
          font-size: 15px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .section #teikei-trouble dt span {
          background: url('/sys_images/ktr01/icon/icon_tel.png') no-repeat left center;
          padding-left: 35px;
          margin-left: 10px;
        }

        .section #qanda dt {
          background: #207bc8;
          background: -webkit-gradient(linear, left top, left bottom, from(#3bb5eb), to(#207bc8));
          background: -moz-linear-gradient(top, #3bb5eb, #207bc8);
          background: -ms-linear-gradient(top, #3bb5eb, #207bc8);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3BB5EB', endColorstr='#207BC8',GradientType=0);
          border-radius: 4px;
          margin-top: 13px;
          position: relative;
        }
        .section #qanda dt .question {
          display: inline-block;
          background: url('/sys_images/ktr01/icon/icon_q.png') no-repeat left center;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          width: 655px;
          margin-left: 5px;
          padding: 13px 0 13px 60px;
        }
        .section #qanda dt .toggle-btn {
          display: inline-block;
          background: url('/sys_images/ktr01/btn_open.png') no-repeat left center;
          width: 70px;
          height: 26px;
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        .section #qanda dt .toggle-btn.active {
          background: url('/sys_images/ktr01/btn_close.png') no-repeat left center;
        }
        .section #qanda dd {
          border: #207bc8 3px solid;
          border-radius: 4px;
          margin-top: -5px;
          z-index: -1;
        }
        .section #qanda dd p {
          display: inline-block;
          background: url('/sys_images/ktr01/icon/icon_a.png') no-repeat left center;
          margin-left: 13px;
          padding: 20px 12px 15px 60px;
          display: none;
        }

        #car-kaitori-footer {
          background: #f3f3f3;
          text-align: center;
          padding: 18px;
          margin-bottom: 30px;
        }
        #car-kaitori-footer ul {
          display: inline-block;
          vertical-align: bottom;
        }
        #car-kaitori-footer li {
          float: left;
          border-left: #999999 2px solid;
          margin-left: 20px;
          padding-left: 20px;
          line-height: 14px;
        }
        #car-kaitori-footer li:first-child {
          border-left: none;
          margin-left: 0;
          padding-left: 0;
        }
        #car-kaitori-footer a {
          color: #135e92;
          font-size: 14px;
          font-weight: bold;
        }

        /* CSS Document */
        /* ページトップへ戻るボタン
==================================================*/
        .to_pagetop {
          text-align: right;
        }
        .to_pagetop a {
          background: url('/sys_images/common/btn_pagetop.gif') no-repeat;
          margin: 0 0 0 auto;
          text-align: left;
          display: block;
          width: 64px;
          height: 15px;
          text-indent: -9999pt;
          overflow: hidden;
        }

        /* ページトップへ戻るボタン
==================================================*/
        #common_pagetop {
          bottom: 5px;
          font-size: 10px;
          position: fixed;
          right: 5px;
        }
        #common_pagetop a {
          background: none repeat scroll 0 0 #666666;
          border-radius: 5px 5px 5px 5px;
          color: #ffffff;
          display: block;
          opacity: 0.8;
          padding: 15px;
          text-align: center;
          text-decoration: none;
        }

        /* 画像のアンカー用
==================================================*/
        a:hover img {
          filter: alpha(opacity=70);
          -moz-opacity: 0.7;
          opacity: 0.7;
        }
        /* clearfix
==================================================*/
        .clearfix:after {
          content: '.';
          clear: both;
          height: 0;
          display: block;
          visibility: hidden;
        }
        .clearfix {
          zoom: 100%;
        }
        .clearFix:after {
          content: '.';
          clear: both;
          height: 0;
          display: block;
          visibility: hidden;
        }
        .clearFix {
          zoom: 100%;
        }
        /* 評価の★
==================================================*/
        .star0 {
          display: inline-block;
          background: url('/sys_images/common/star.png') no-repeat;
          width: 71px;
          height: 14px;
          text-indent: -9999pt;
        }
        .star05 {
          display: inline-block;
          background: url('/sys_images/common/star.png') no-repeat 0 -14px;
          width: 71px;
          height: 14px;
          text-indent: -9999pt;
        }
        .star1 {
          display: inline-block;
          background: url('/sys_images/common/star.png') no-repeat 0 -28px;
          width: 71px;
          height: 14px;
          text-indent: -9999pt;
        }
        .star15 {
          display: inline-block;
          background: url('/sys_images/common/star.png') no-repeat 0 -42px;
          width: 71px;
          height: 14px;
          text-indent: -9999pt;
        }
        .star2 {
          display: inline-block;
          background: url('/sys_images/common/star.png') no-repeat 0 -56px;
          width: 71px;
          height: 14px;
          text-indent: -9999pt;
        }
        .star25 {
          display: inline-block;
          background: url('/sys_images/common/star.png') no-repeat 0 -70px;
          width: 71px;
          height: 14px;
          text-indent: -9999pt;
        }
        .star3 {
          display: inline-block;
          background: url('/sys_images/common/star.png') no-repeat 0 -84px;
          width: 71px;
          height: 14px;
          text-indent: -9999pt;
        }
        .star35 {
          display: inline-block;
          background: url('/sys_images/common/star.png') no-repeat 0 -98px;
          width: 71px;
          height: 14px;
          text-indent: -9999pt;
        }
        .star4 {
          display: inline-block;
          background: url('/sys_images/common/star.png') no-repeat 0 -112px;
          width: 71px;
          height: 14px;
          text-indent: -9999pt;
        }
        .star45 {
          display: inline-block;
          background: url('/sys_images/common/star.png') no-repeat 0 -126px;
          width: 71px;
          height: 14px;
          text-indent: -9999pt;
        }
        .star5 {
          display: inline-block;
          background: url('/sys_images/common/star.png') no-repeat 0 -140px;
          width: 71px;
          height: 14px;
          text-indent: -9999pt;
        }
        /* 一覧用リンク
==================================================*/

        .to_list {
          padding: 5px 0 0;
          text-align: right;
        }
        .to_list a {
          background: url('/sys_images/top-index/portal_icon.gif') no-repeat scroll 0 -1899px transparent;
          color: #0066cc;
          padding: 0 0 0 15px;
          text-decoration: underline;
        }
        .to_list a:hover {
          text-decoration: none;
        }

        /* 共通アイコン
==================================================*/
        .common_icon_new {
          float: left;
          background: url('/sys_images/common/ws_common_icon.gif') no-repeat;
          width: 35px;
          height: 15px;
          text-indent: -9999pt;
          vertical-align: middle;
          margin: 0 1px 0 0;
          overflow: hidden;
        }
        .common_icon_sale {
          float: left;
          background: url('/sys_images/common/ws_common_icon.gif') no-repeat 0 -50px;
          width: 35px;
          height: 15px;
          text-indent: -9999pt;
          vertical-align: middle;
          margin: 0 1px 0 0;
          overflow: hidden;
        }
        .common_icon_stock {
          float: left;
          background: url('/sys_images/common/ws_common_icon.gif') no-repeat 0 -100px;
          width: 45px;
          height: 15px;
          text-indent: -9999pt;
          vertical-align: middle;
          margin: 0 1px 0 0;
          overflow: hidden;
        }
        .common_icon_free_shipping {
          float: left;
          background: url('/sys_images/common/ws_common_icon.gif') no-repeat 0 -150px;
          width: 45px;
          height: 15px;
          text-indent: -9999pt;
          vertical-align: middle;
          margin: 0 1px 0 0;
          overflow: hidden;
        }

        /* 太字表示
==================================================*/
        .font_bold {
          font-weight: bold;
        }

        /* ソーシャルボタン
==================================================*/
        ul.social {
          list-style-type: none;
          position: fixed;
          width: 80px;
          margin: 0 0 0 0;
          padding: 10px 10px 0 10px;
          background: #ffffff;
          border: 1px solid #c1c1c1;
          right: -10px;
          top: 34%;
          -moz-border-radius: 3px;
          -webkit-border-radius: 3px;
          border-radius: 3px;
        }
        ul.social li {
          float: bottom;
          list-style-type: none;
          margin: 0 0 10px 0;
          padding: 0;
          text-align: center;
          width: 60px !important;
        }
        ul.social li iframe.twitter-share-button {
          width: 70px !important;
        }

        /* 検索ページツリー選択時
==================================================*/
        .tree_selected {
          font-weight: bold;
          background: #ffff00;
        }

        /* CSS Document */

        /*　全体レイアウト
==================================================*/

        #wrapper {
          width: 100%;
          text-align: left;
          line-height: 1.5;
        }
        #wrapper #container {
          width: 950px;
          margin: 0 auto;
        }
        #wrapper #container #inner_container {
          width: 800px;
          margin: 0 auto;
        }

        /*　共通部分
==================================================*/
        #wrapper #container h3 {
          display: block;
          margin: 10px 0;
          width: 800px;
          height: 50px;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_menu_list02.png') no-repeat;
          text-indent: -9999pt;
        }
        #wrapper #container .btn_02 {
          margin: 30px auto 10px;
          display: block;
          width: 458px;
          height: 114px;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_btn.png') no-repeat;
          text-indent: -9999pt;
          border: none;
          cursor: pointer;
        }
        #wrapper #container .btn_02:hover {
          background-position: 0 -114px;
        }
        #wrapper #container .btn_sanko {
          text-align: center;
          margin: 10px 0;
        }
        .hidden {
          display: none;
        }

        /*　トップ画像
==================================================*/
        #wrapper #container #kaitori-top {
          width: 277px;
          height: 250px;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_top.jpg') no-repeat;
          padding: 150px 0 0 523px;
          text-indent: -9999pt;
        }
        /*　トップ画像の査定ボタン
==================================================*/
        #wrapper #container #kaitori-top .btn_01 {
          display: block;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_btn.png') no-repeat;
          background-position: 0 -228px;
          height: 124px;
          width: 257px;
          text-indent: -9999pt;
          border: 0;
          cursor: pointer;
        }
        #wrapper #container #kaitori-top .btn_01:hover {
          background-position: 0 -352px;
        }

        /*　メニューバー
==================================================*/
        #wrapper #container #menu {
          height: 54px;
          padding: 10px 0;
        }
        #wrapper #container #menu li {
          float: left;
        }
        #wrapper #container #menu li a {
          text-indent: -9999pt;
          display: block;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_menu_list01.png') no-repeat;
          height: 54px;
        }
        #wrapper #container #menu .menu_flow a {
          width: 161px;
          height: 54px;
        }
        #wrapper #container #menu .menu_flow a:hover,
        #wrapper #container #menu .menu_flow a.selected {
          background-position: 0 -54px;
        }
        #wrapper #container #menu .menu_shop a {
          width: 206px;
          background-position: -161px 0;
        }
        #wrapper #container #menu .menu_shop a:hover,
        #wrapper #container #menu .menu_shop a.selected {
          background-position: -161px -54px;
        }
        #wrapper #container #menu .menu_tips a {
          width: 165px;
          background-position: -367px 0;
        }
        #wrapper #container #menu .menu_tips a:hover {
          background-position: -367px -54px;
        }
        #wrapper #container #menu .menu_faq a {
          width: 122px;
          background-position: -532px 0;
        }
        #wrapper #container #menu .menu_faq a:hover,
        #wrapper #container #menu .menu_faq a.selected {
          background-position: -532px -54px;
        }
        #wrapper #container #menu .menu_kiyaku a {
          width: 146px;
          background-position: -654px 0;
        }
        #wrapper #container #menu .menu_kiyaku a:hover,
        #wrapper #container #menu .menu_kiyaku a.selected {
          background-position: -654px -54px;
        }

        /*　買取店の紹介
==================================================*/
        #wrapper #container #kaitori_shop h3 {
          background-position: 0 -50px;
        }
        #wrapper #container #kaitori_shop p {
          margin: 10px 0;
        }
        #wrapper .shoplist {
          width: 780px;
          margin: 0 auto;
          border: 1px #83d7f9 solid;
        }
        #wrapper .shoplist li {
          float: left;
          text-align: center;
          width: 100px;
          padding: 10px 15px;
          list-style-type: none;
          font-size: 10px;
        }

        /*　高額買取のコツ
==================================================*/
        #wrapper #container #kaitori_tips h3 {
          background-position: 0 -100px;
        }
        #wrapper #container #kaitori_tips p {
          margin: 10px;
        }
        #wrapper #container #kaitori_tips dl {
          margin: 0 auto;
          padding: 10px 20px;
          width: 740px;
          border: 1px #83d7f9 solid;
        }
        #wrapper #container #kaitori_tips dl dt {
          border-left: #06c solid 5px;
          border-bottom: 1px #83d7f9 solid;
          padding: 0 0 5px 5px;
          font-size: 16px;
          font-weight: bold;
          margin: 10px 10px 10px 0;
          color: #00459d;
        }
        #wrapper #container #kaitori_tips dl dd {
          margin: 0 10px 20px 10px;
        }
        #wrapper #container #kaitori_tips dl dd p {
          width: 330px;
          margin: 5px 10px;
          padding: 10px;
          background-color: #e3f7ff;
          border: 1px #83d7f9 solid;
        }
        /* ショップ詳細ページ */

        /*　ショップ紹介
==================================================*/
        #wrapper #container #shop_page {
          text-align: center;
        }
        #wrapper #container #shop_page h3 {
          background-position: 0 -300px;
        }
        #wrapper #container #shop_page p {
          margin: 20px 0;
        }
        #wrapper #container #shop_page pre {
          text-align: left;
        }
        #wrapper #container #shop_page .name {
          display: block;
          background: url('http://www.webike.net/sys_images/ktr00/shop_topics.png') no-repeat;
          height: 55px;
          text-indent: -9999pt;
          border-bottom: 1px #83d7f9 solid;
          margin: 5px 0 0 0;
        }
        /* バイク王 */
        #wrapper #container #shop_page .name_01 {
          background-position: -0px -0px;
        }
        /* バイク査定ドットコム */
        #wrapper #container #shop_page .name_02 {
          background-position: -0px -55px;
        }
        /* バイクボーイ */
        #wrapper #container #shop_page .name_03 {
          background-position: -0px -110px;
        }
        /* ゲオバイク */
        #wrapper #container #shop_page .name_04 {
          background-position: -0px -165px;
        }
        /* ドリームカンパニー */
        #wrapper #container #shop_page .name_05 {
          background-position: -0px -220px;
        }
        /* バイクショップ ロミオ */
        #wrapper #container #shop_page .name_06 {
          background-position: -0px -275px;
        }
        #wrapper #container #shop_page .shop_topics {
          margin: 0 auto;
          padding: 0 20px;
          width: 740px;
          border: 1px #83d7f9 solid;
        }
        #wrapper #container #shop_page .shop_topics pre {
          margin: 20px 0 0 0;
        }
        #wrapper #container #shop_page dl {
          text-align: left;
          margin: 10px 0 0 0;
        }
        #wrapper #container #shop_page dl dt {
          font-weight: bold;
        }
        #wrapper #container #shop_page dl dd {
          margin: 0 0 10px 0;
        }
        #wrapper #container #shop_page .shop_topics p {
          text-align: left;
        }
        #wrapper #container #shop_page h4 {
          text-align: left;
          border-left: #06c 5px solid;
          font-size: 16px;
          padding: 0 0 0 5px;
        }
        #wrapper #container #shop_page table {
          background: #fff;
          border-collapse: separate;
          border: 1px solid #cbcbcb;
          margin: 20px;
          width: 700px;
          text-align: left;
        }
        #wrapper #container #shop_page table td {
          padding: 5px;
        }
        #wrapper #container #shop_page th {
          width: 180px;
          background: #e8e8e8;
          border: 1px solid #cbcbcb;
          padding: 5px;
        }
        #wrapper #container #shop_page tr {
          background: #fff;
          border: 1px solid #cbcbcb;
        }
        #wrapper #container #shop_page td {
          background: #fff;
          border: 1px solid #cbcbcb;
        }
        /* ご利用規約ページ */

        /*　ページ全体レイアウト
==================================================*/
        #wrapper #container #kaitori_kiyaku h3 {
          background-position: 0 -150px;
        }
        #wrapper #container #kaitori_kiyaku {
          width: 800px;
        }
        /*　利用規約についての説明
==================================================*/
        #wrapper #container #kaitori_kiyaku .kiyaku_txt {
          margin: 10px 20px;
        }
        #wrapper #container #kaitori_kiyaku .kiyaku_txt p {
          margin: 2px 7px;
        }
        /*　規約内容
==================================================*/
        #wrapper #container #kaitori_kiyaku h4 {
          display: block;
          width: 780px;
          height: 32px;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_title.gif') no-repeat;
          background-position: 0 -96px;
          margin: 10px auto;
          text-indent: -9999pt;
        }
        #wrapper #container #kaitori_kiyaku .kiyaku_txt dl dt {
          margin: 20px 0 0 0;
          font-weight: bold;
          font-size: 14px;
          color: #0045a4;
          border-bottom: 1px #83d7f9 solid;
        }
        #wrapper #container #kaitori_kiyaku .kiyaku_txt dl dd {
          margin: 5px;
        }
        /* よくある質問 */

        /*　ページ全体レイアウト
==================================================*/
        #wrapper #container #kaitori_faq h3 {
          background-position: 0 -200px;
        }
        #wrapper #container #kaitori_faq .faq_txt {
          width: 780px;
          margin: 10px auto;
        }
        /*　質問一覧
==================================================*/
        #wrapper #container #kaitori_faq .faq_txt .list_faq {
          margin: 10px;
        }
        #wrapper #container #kaitori_faq .faq_txt .list_faq a {
          color: #000;
        }
        #wrapper #container #kaitori_faq .faq_txt .list_faq li ul {
          margin: 5px 0;
        }
        #wrapper #container #kaitori_faq .faq_txt .list_faq li ul li {
          margin: 5px 25px;
        }
        #wrapper #container #kaitori_faq .faq_txt .list_faq p {
          border-left: 5px solid #0066cc;
          padding: 0 0 0 5px;
          margin: 20px 0 10px 0;
          font-weight: bold;
          font-size: 14px;
          color: #0045a4;
          border-bottom: 1px #83d7f9 solid;
        }
        #wrapper #container #kaitori_faq .faq_txt .list_faq .faq_icon {
          margin: 0 5px 0 0;
          color: #ff8b24;
        }
        /*　回答一覧の見出し画像
==================================================*/
        #wrapper #container #kaitori_faq .faq_txt h4 {
          display: block;
          width: 780px;
          height: 32px;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_title.gif') no-repeat;
          margin: 20px 0;
          text-indent: -9999pt;
        }
        #wrapper #container #kaitori_faq .faq_txt .faq_02 {
          background-position: 0 -32px;
        }
        #wrapper #container #kaitori_faq .faq_txt .faq_03 {
          background-position: 0 -64px;
        }
        /*　回答一覧
==================================================*/
        #wrapper #container #kaitori_faq .faq_txt .faq_detail {
          padding: 0 20px 0 20px;
        }
        #wrapper #container #kaitori_faq .faq_txt .faq_detail dt {
          background: url('http://www.webike.net/sys_images/ktr00/faq_icon.gif') no-repeat;
          background-position: -10px -10px;
          padding: 10px 0 10px 45px;
          margin: 15px 0 10px 0;
          font-weight: bold;
          font-size: 14px;
          color: #0045a4;
          border-bottom: 1px #83d7f9 solid;
        }
        #wrapper #container #kaitori_faq .faq_txt .faq_detail dd {
          background: url('http://www.webike.net/sys_images/ktr00/faq_icon.gif') no-repeat;
          background-position: -10px -60px;
          padding: 7px 0 20px 45px;
          margin: 10px 0 10px 25px;
        }
        #wrapper #container #kaitori_faq .faq_txt .faq_detail dd span {
          font-size: 10px;
        }
        /* パンくずリスト
==================================================*/
        #crumb_list {
          margin: 0 0 10px;
        }
        #crumb_list a {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
