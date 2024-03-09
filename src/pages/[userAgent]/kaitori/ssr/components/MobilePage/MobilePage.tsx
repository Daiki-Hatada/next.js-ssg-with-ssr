import { ReactNode } from 'react'

export const Header = ({ children, withMainMenu = false }: { children?: ReactNode; withMainMenu: boolean }) => {
  return (
    <>
      <header id='pagetop' className='page_header'>
        <div className='page_header_contents'>
          <div className='cw page_header_contents__inner'>
            <p className='page_header_logo'>
              <a href='/kaitori/'>
                <img
                  src='/img/kaitori/pc/common/page_header_logo.png'
                  height={32}
                  width={346}
                  alt='車選びドットコムの一括査定'
                />
              </a>
            </p>
            {children}
          </div>
        </div>
        {/* /.page_header_contents */}
        {withMainMenu && (
          <div className='mainmenu'>
            <nav>
              <ul className='cw clearfix'>
                <li>
                  <a className='marketprice' href='/kaitori/marketprice/'>
                    車買取相場・価格推移
                  </a>
                </li>
                <li>
                  <a className='company' href='/kaitori/company/'>
                    車買取業者評判ランキング
                  </a>
                </li>
                <li>
                  <a className='shop' href='/kaitori/shop/'>
                    近くの買取店を探す
                  </a>
                </li>
                <li>
                  <a className='manual' href='/kaitori/manual/' target='_blank'>
                    車買取マニュアル
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
      <style jsx>{`
        /*--------------------------------------
  Reset CSS
--------------------------------------*/
        html,
        body,
        div,
        span,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        a,
        blockquote,
        pre,
        abbr,
        address,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        samp,
        small,
        strong,
        sub,
        sup,
        var,
        b,
        i,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          outline: 0;
          font-size: 100%;
          vertical-align: bottom;
          background: transparent;
          font-weight: normal;
          font-style: normal;
          list-style: none;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        hr {
          display: block;
          height: 1px;
          border: 0;
          border-top: solid 1px #ccc;
          margin: 1em 0;
          padding: 0;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        a {
          text-decoration: none;
        }
        a:visited {
          text-decoration: none;
        }
        a:hover {
          text-decoration: none;
        }
        abbr[title],
        dfn[title] {
          border-bottom: 1px dotted;
          cursor: help;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        mark {
          font-style: italic;
          font-weight: bold;
        }
        input,
        select {
          vertical-align: middle;
        }
        del {
          text-decoration: line-through;
        }
        ins {
          text-decoration: none;
        }
        strong {
          font-weight: bold;
        }
        sup {
          vertical-align: super;
        }
        sub {
          vertical-align: sub;
        }
        em {
          font-style: italic;
        }

        /*--------------------------------------
  Common CSS
--------------------------------------*/
        html {
          font-size: 62.5%;
        }
        html,
        body {
          min-height: 100%;
          min-width: 1200px;
          text-align: justify;
        }
        body {
          font-size: 1.6em;
          line-height: 1.8;
          font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, メイリオ, sans-serif;
          color: #333333;
        }
        a {
          color: #0d79bf;
          text-decoration: none;
          outline: none;
          backface-visibility: hidden;
        }
        a:hover {
          color: rgba(18, 121, 191, 0.6);
        }
        body * a {
          transition: 0.2s;
        }

        .cw {
          width: 1200px;
          margin: 0 auto;
        }
        .center {
          text-align: center;
        }
        .right {
          text-align: right;
        }

        /*-- Float --*/
        .floatLeft {
          float: left;
        }
        .floatRight {
          float: right;
        }

        /* margin_new 2023.02.21~ */
        .u-mb_ss {
          margin-bottom: 1.6rem !important;
        }
        .u-mb_s {
          margin-bottom: 2.4rem !important;
        }
        .u-mb {
          margin-bottom: 3.2rem !important;
        }
        .u-mb_l {
          margin-bottom: 4.8rem !important;
        }
        .u-mb_ll {
          margin-bottom: 5.6rem !important;
        }
        .u-mb_lll {
          margin-bottom: 8rem !important;
        }
        .u-mb_llll {
          margin-bottom: 12rem !important;
        }

        .u-mt_s {
          margin-top: 2.4rem !important;
        }

        /* margin ~2023.02.21 */
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
        .m1em {
          margin: 1em !important;
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
        .mt60 {
          margin-top: 60px !important;
        }
        .mt100 {
          margin-top: 100px !important;
        }
        .mt1em {
          margin-top: 1em !important;
        }
        .mtauto {
          margin-top: auto !important;
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
        .mr1em {
          margin-right: 1em !important;
        }
        .mrauto {
          margin-right: auto !important;
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
        .mb60 {
          margin-bottom: 60px !important;
        }
        .mb100 {
          margin-bottom: 100px;
        }
        .mb1em {
          margin-bottom: 1em !important;
        }
        .mbauto {
          margin-bottom: auto !important;
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
        .ml1em {
          margin-left: 1em !important;
        }
        .mlauto {
          margin-left: auto !important;
        }

        /* padding */
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
        .pt60 {
          padding-top: 60px;
        }
        .pt100 {
          padding-top: 100px;
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
        .pb60 {
          padding-bottom: 60px;
        }
        .pb100 {
          padding-bottom: 100px;
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

        /* clearfix */
        .clearfix:before,
        .clearfix:after {
          content: ' ';
          display: table;
        }
        .clearfix:after {
          clear: both;
          height: 0.1px;
          font-size: 0.1em;
          line-height: 0;
        }
        .clearfix {
          *zoom: 1;
        }

        /* font size */
        .ssmall {
          font-size: 1.2rem;
        }
        .small {
          font-size: 1.4rem;
        }
        .large {
          font-size: 2rem;
        }

        .text_red {
          color: #a30000;
        }
        .text_gray {
          color: #999;
        }
        .u-text_annotation {
          font-size: 1.2rem;
          line-height: 1.4;
          margin: 0.4rem 0;
        }

        .bg_l_gray {
          background: #fbf7f5;
        }
        .bg_white {
          background: #fff;
        }

        .left {
          text-align: left;
        }
        .right {
          text-align: right;
        }
        .fl_right {
          float: right;
        }
        .bold {
          font-weight: bold;
        }

        .underline {
          text-decoration: underline;
        }

        @keyframes r1 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /*--------------------------------------
  Header Layout CSS
--------------------------------------*/
        .page_header {
          background: #fff;
        }
        .page_header .page_header_line {
          overflow: hidden;
          background: #a30000;
          font-size: 1.2rem;
          padding: 5px;
        }
        .page_header .page_header_line a {
          text-decoration: underline;
        }
        .page_header .page_header_line a:hover {
          text-decoration: none;
        }
        .page_header .page_header_line a img:hover {
          opacity: 0.5;
        }
        .page_header .site_copy {
          float: left;
          color: #ffffff;
          font-weight: normal;
          width: 600px;
        }
        .page_header .site_link {
          float: right;
        }
        .page_header .site_link .text_link {
          margin-right: 10px;
          color: #ffffff;
        }
        .page_header .site_link .logo_top {
          margin-bottom: 3px;
        }
        .page_header .page_header_contents {
          padding: 24px 0;
        }
        .page_header_contents__inner {
          display: flex;
          align-items: center;
        }
        .page_header_contents__inner .page_header_logo {
          margin-right: 1.2rem;
        }
        .page_header_contents__inner .page_header_description {
          width: 600px;
          font-size: 1.3rem;
          line-height: 1.4;
          margin-left: auto;
        }
        .page_header_contents__inner .assessment_flow {
          margin-left: auto;
        }
        .page_header_contents__inner .page_header__related_site {
          display: flex;
          margin-left: auto;
        }
        .page_header_contents__inner .page_header__related_site ul {
          display: flex;
          gap: 4rem;
        }
        .page_header_contents__inner .page_header__related_site a {
          color: #404040;
        }
        .page_header_contents__inner .page_header__related_site a:hover {
          text-decoration: underline;
        }

        .page_header .mainmenu {
          background: #404040;
          color: #fff;
          position: relative;
          z-index: 2;
        }
        .page_header .mainmenu nav {
          width: 100%;
        }
        .page_header .mainmenu ul {
          box-sizing: border-box;
          display: flex;
        }
        .page_header .mainmenu li {
          position: relative;
        }
        .page_header .mainmenu li:after,
        .page_header .mainmenu ul li:first-child::before,
        .page_header .mainmenu ul li:last-child::after {
          display: block;
          content: '';
          height: 20px;
          width: 1px;
          background: #999;
          position: absolute;
          top: 50%;
          margin-top: -10px;
        }
        .page_header .mainmenu ul li:first-child::before {
          left: 0;
        }
        .page_header .mainmenu li:after,
        .page_header .mainmenu ul li:last-child::after {
          right: 0;
        }
        .page_header .mainmenu li:last-child:after {
          display: none;
        }
        .page_header .mainmenu li a {
          text-align: center;
          color: #fff;
          font-size: 1.6rem;
          display: block;
          line-height: 1.2;
          width: 300px;
          padding: 16px 0;
        }
        .page_header .mainmenu li a:hover {
          text-decoration: none;
          background: #666;
        }
        .page_header .mainmenu li:first-child a {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        .page_header .mainmenu li:last-child a {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }

        /*--------------------------------------
  Breadcrumb Layout CSS
--------------------------------------*/
        .breadcrumb {
          position: relative;
          z-index: 3;
          font-size: 13px;
          overflow: hidden;
          height: 44px;
        }
        .breadcrumb ol {
          width: 1200px;
          margin: 0 auto;
          box-sizing: border-box;
          white-space: nowrap;
          overflow-x: scroll;
          overflow-y: hidden;
          height: 60px;
          line-height: 44px;
        }
        .breadcrumb li {
          display: inline-block;
          margin-right: 20px;
          position: relative;
        }
        .breadcrumb li:after {
          position: absolute;
          top: 0;
          bottom: 0;
          right: -15px;
          margin: auto;
          content: '';
          background: url(/img/kaitori/pc/icon/icon_arrow.png) no-repeat center center;
          background-size: 4px 6px;
          width: 4px;
          height: 6px;
        }
        .breadcrumb li:last-child:after {
          content: none;
        }

        /* breadcrumb用暫定対応（本来は#breadcrumbの部分のhtmlを整形して、表示したい箇所） */
        /*.page_header .mainmenu {
  background: #FAFAFA;
  border-bottom: 1px solid #ccc;
  height: 58px;
  margin-bottom: -42px;
  z-index: 2;
}*/
        .top .page_header .mainmenu {
          border-bottom: none;
          height: 0;
          margin-bottom: 18px;
        }
        #breadcrumb {
          position: relative;
          z-index: 2;
        }
        .floatyHead {
          z-index: 4;
        }

        /*--------------------------------------
  Contents Layout CSS
--------------------------------------*/
        .page_sumally {
          text-align: center;
        }
        .page_sumally .page_title {
          margin: 60px auto 40px;
          padding-bottom: 40px;
          font-size: 2.8rem;
          line-height: 1;
          font-weight: bold;
          position: relative;
        }
        .page_sumally .page_title:before {
          content: '';
          display: block;
          width: 120px;
          height: 2px;
          background: #a30000;
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          margin: auto;
        }
        .page_sumally .page_title span {
          font-size: 24px;
          font-weight: bold;
          vertical-align: baseline;
        }
        .page_sumally small {
          display: block;
          font-size: 1.4rem;
          color: #999;
          text-align: center;
          margin-top: 10px;
        }

        .pageTitle {
          margin: 8rem auto 4.8rem;
          padding-bottom: 4.8rem;
          width: 1200px;
          font-size: 2.8rem;
          line-height: 1.4;
          font-weight: bold;
          position: relative;
          text-align: center;
        }
        .pageTitle:before {
          content: '';
          width: 120px;
          height: 2px;
          background: #a30000;
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          margin: auto;
        }
        .pageTitle span {
          font-size: 16px;
          font-weight: bold;
        }
        .contents_section {
          width: 1200px;
          margin: auto;
        }

        /* .contents_titleは使用しない方向で調整中(2023/10)*/
        .contents_title {
          font-size: 2.8rem;
          font-weight: bold;
          padding-bottom: 40px;
          position: relative;
          text-align: center;
          line-height: 2.8rem;
          margin-bottom: 40px;
          padding-top: 100px;
        }
        .contents_title:before {
          content: '';
          width: 120px;
          height: 2px;
          background: #a30000;
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          margin: auto;
        }

        /* 見出し01 */
        .contents_sub_title {
          box-sizing: border-box;
          border-left: 10px solid #a30000;
          font-size: 2.8rem;
          font-weight: bold;
          line-height: 1.4;
          padding: 0.4rem 0 0.4rem 1.6rem;
          margin-top: 8rem;
          margin-bottom: 3.2rem;
        }
        .contents_sub_title a {
          color: #333333;
          font-weight: bold;
        }

        /* 見出し02 */
        .contents_title_03 {
          border-bottom: 1px solid #a30000;
          padding-bottom: 0.8rem;
          font-size: 2.2rem;
          font-weight: bold;
          line-height: 1.4;
          margin: 2.4rem 0;
        }

        /* 見出し03 */
        .contents_sub2_title {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 2.4rem;
        }

        .icon_right_arrow a {
          padding-left: 20px;
          position: relative;
        }
        .icon_right_arrow a:before {
          content: '';
          background: #0d79bf url(/img/kaitori/pc/icon/icon_arrow_white.png) no-repeat;
          background-size: 7px 4px;
          background-position: center top 4px;
          width: 13px;
          height: 13px;
          display: block;
          border-radius: 50%;
          transform: rotate(90deg);
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        .icon_left_gray a {
          background: url(/img/kaitori/icon/arrow_gray.png) no-repeat left center;
          padding-left: 10px;
        }
        .pager {
          display: inline-block;
          float: left;
          margin-bottom: 20px;
        }
        .pager li {
          float: left;
        }
        .pager li a {
          border: 1px solid #999999;
          border-radius: 5px;
          color: #999999;
          width: 40px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          float: left;
          margin-right: 10px;
          font-weight: bold;
          font-size: 12px;
        }
        .pager li.hit a {
          background: #333333;
          color: #ffffff;
          border: 1px solid #333333;
          border-radius: 5px;
        }
        .page_right_contents {
          position: fixed;
          right: 0;
          top: 109px;
        }

        /*--------------------------------------
  CTA Layout CSS
--------------------------------------*/
        .ctabox_small_bg {
          background: linear-gradient(225deg, #ffe4b1 30%, #ffd2cc 70%) 0% 0% no-repeat padding-box;
          opacity: 1;
          background-attachment: fixed;
        }
        .ctabox_small_bg .ctabox_small {
          width: 1200px;
          margin: auto;
          border-radius: 7px;
          padding: 60px 0;
          box-sizing: border-box;
        }
        .ctabox_small_bg .ctabox_small .ctabox_title {
          text-align: center;
          font-size: 28px;
          font-weight: bold;
          margin: 20px 0 10px;
        }
        .ctabox_small_bg .ctabox_small .ctabox_text {
          text-align: center;
        }
        .ctabox_small_bg .ctabox_small .btn_inquiryform {
          height: 150px;
          position: relative;
        }
        .ctabox_small_bg .ctabox_small .btn_inquiryform a {
          box-sizing: border-box;
          width: 550px;
          height: 90px;
          display: block;
          background: #00b503;
          color: #fff;
          font-size: 3.6rem;
          line-height: 82px;
          text-align: center;
          border: 4px solid #00b503;
          border-radius: 45px;
          box-shadow: 0px 4px 6px #00000033;
          transition: 0.2s;
          position: absolute;
          bottom: 35px;
          right: 0;
          left: 0;
          margin: auto;
        }
        .ctabox_small_bg .ctabox_small .btn_inquiryform a span {
          margin-right: 30px;
          font-weight: bold;
        }
        .ctabox_small_bg .ctabox_small .btn_inquiryform a span::after {
          content: '(無料)';
          font-size: 0.7em;
        }
        .ctabox_small_bg .ctabox_small .btn_inquiryform a span::before {
          position: absolute;
          content: '';
          right: 40px;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 30px;
          height: 30px;
          background: url(/img/kaitori/pc/icon/icon_arrow_circle_white.png) no-repeat center center;
          background-size: 30px 30px;
        }
        .ctabox_small_bg .ctabox_small .btn_inquiryform a:hover {
          text-decoration: none;
          background: #fff;
          color: #00b503;
          box-shadow: none;
          bottom: 30px;
          opacity: unset;
        }
        .ctabox_small_bg .ctabox_small .btn_inquiryform a:hover span::before {
          background: url(/img/kaitori/pc/icon/icon_arrow_circle_green.png) no-repeat center center;
          background-size: 30px 30px;
        }
        .ctabox_small_bg .ctabox_small .tel_box {
          width: 900px;
          margin: 0 auto 20px;
          background: #fff;
          padding: 16px;
          border-radius: 8px;
          box-sizing: border-box;
        }
        .ctabox_small .tel_box_text {
          font-weight: bold;
          text-align: center;
          display: block;
          width: 100%;
          margin: auto;
          line-height: 1.1;
        }
        .ctabox_small .tel_box_text:before {
          content: '';
          width: 14px;
          height: 18px;
          display: inline-block;
          background: url(/img/kaitori/pc/icon/icon_tel.png) no-repeat center center;
          background-size: 14px 18px;
          margin-right: 10px;
          margin-bottom: -3px;
        }
        .ctabox_small .tel_box_number {
          font-weight: bold;
          color: #a30000;
        }

        .ctabox_small_bg {
          background: transparent linear-gradient(219deg, #ffe4b1 0%, #ffd2cc 100%) 0% 0% no-repeat padding-box;
          opacity: 1;
          background-attachment: fixed;
        }
        .form_assistance {
          width: 1200px;
          margin: 40px auto 80px;
        }

        .ctabox_nextage {
          margin: 8rem 0;
        }
        .ctabox_nextage .ctabox_title {
          position: relative;
          font-size: 2.4rem;
          line-height: 1;
          margin-bottom: 8rem;
          margin-top: 0;
        }
        .ctabox_nextage .ctabox_title .bold {
          font-size: 3.2rem;
        }
        .ctabox_nextage .ctabox_title:before,
        .ctabox_nextage .ctabox_title:after {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          z-index: -1;
        }
        .ctabox_nextage .ctabox_title:before {
          top: 45px;
          width: 180px;
          height: 30px;
          background-color: #ffe9b5;
          background: linear-gradient(to bottom, #fff8c4, #ffe9b5);
        }
        .ctabox_nextage .ctabox_title:after {
          top: 75px;
          width: 0;
          height: 0;
          border-top: 40px solid #ffe9b5;
          border-left: 160px solid transparent;
          border-right: 160px solid transparent;
        }
        .ctabox_nextage .btn_confirm a {
          position: relative;
          width: 485px;
          margin: 0 auto;
        }
        .ctabox_nextage .btn_confirm a:hover {
          top: 5px;
        }
        .ctabox_nextage .btn_confirm a span::after {
          margin-left: 10px;
          margin-bottom: 5px;
        }
        /*****************/

        .form_anchor_cta_btn2 {
          text-align: center;
          position: relative;
          z-index: 2;
          margin-top: 40px;
        }

        .form_anchor_cta_btn2 a {
          display: block;
          width: 450px;
          height: 70px;
          line-height: 62px;
          margin: 0 auto;
          border-radius: 35px;
          text-align: center;
          background: #00b503;
          font-size: 28px;
          font-weight: bold;
          color: #fff;
          border: 4px solid #00b503;
          box-sizing: border-box;
          box-shadow: 0px 4px 6px #00000033;
          text-decoration: none;
          position: relative;
          vertical-align: baseline;
          transition: 0.2s all ease 0s;
        }

        .form_anchor_cta_btn2 a:hover {
          text-decoration: none;
          background: #fff;
          border: 4px solid #00b503;
          color: #00b503;
          box-shadow: none;
          bottom: -5px;
        }
        .form_anchor_cta_btn2 a:hover:before {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 5px;
          top: -9px;
          transform: rotate(0deg);
        }
        .form_anchor_cta_btn2 a {
          display: inline-block;
          width: auto;
          padding: 0 40px;
        }
        .form_anchor_cta_btn2 .small {
          font-size: 24px;
          font-weight: bold;
          vertical-align: baseline;
        }

        /*--------------------------------------
  Footer Layout CSS
--------------------------------------*/
        .page_footer {
          font-size: 1.4rem;
        }
        .page_footer a {
          color: #666;
        }
        .page_footer .btn_pagetop {
          width: 40px;
          height: 40px;
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 100;
        }
        .page_footer .btn_pagetop a {
          width: 40px;
          height: 40px;
          background: #333333;
          border-radius: 4px;
          display: block;
          position: relative;
          opacity: 0.7;
          transition: 0.2s;
        }
        .page_footer .btn_pagetop a::after {
          content: '';
          width: 16px;
          height: 10px;
          background: url(/img/kaitori/pc/icon/icon_arrow_white.png) no-repeat center center;
          background-size: 16px 10px;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          margin: auto;
        }
        .page_footer .btn_pagetop a:hover {
          opacity: 0.5;
        }
        .page_footer .credit_info {
          color: #000000;
          font-size: 1.4rem;
          background-color: #ffffff;
        }
        .page_footer .page_footer_nav {
          padding: 30px 0px;
          text-align: center;
          background: #f4f4f4;
        }
        .page_footer .page_footer_nav a {
          color: #0d79bf;
        }
        .page_footer .page_footer_nav li {
          display: inline-block;
          line-height: 2;
        }
        .page_footer .page_footer_nav li:after {
          content: '｜';
          margin-left: 0.5em;
        }
        .page_footer .page_footer_nav li:last-child:after {
          content: none;
        }
        .page_footer .sitename_area {
          background: #ddd;
          text-align: center;
          padding-top: 30px;
        }
        .page_footer .sitename_area .link_footer_to_haisha,
        .page_footer .sitename_area .link_footer_to_jikosha {
          padding-bottom: 5px;
        }
        .page_footer .copyright {
          text-align: center;
          font-size: 1rem;
          padding: 20px;
          color: #666;
          background: #ddd;
        }
        .script_area {
          position: absolute;
          bottom: 50px;
          z-index: -5;
        }
        .form-creative_area {
          background: transparent linear-gradient(180deg, #ffd8cc 0%, #ffefd1 51%, #fff 75%) 0% 0% no-repeat padding-box;
          margin-top: 16rem;
        }
        .form-creative_area .form-creative img {
          margin-top: -80px;
        }

        /* 上場訴求 */
        .page_footer .listed_description {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          line-height: 1.4;
          padding: 1.6rem;
        }
        .page_footer .listed_description img {
          margin-left: 1.5rem;
        }

        /* 201908追加　検索回数ランキングのデザイン変更 */
        .search-count_ranking {
          display: flex;
          flex-wrap: wrap;
          gap: 1.6rem;
        }
        .search-count_ranking li {
          width: 32.4%;
          position: relative;
        }
        .search-count_ranking li::before {
          position: absolute;
          content: '';
          width: 30px;
          height: 30px;
          background: url(/img/kaitori/company/car_ranking_icon_flag.png) no-repeat;
          background-size: 278px 30px;
          top: 0;
          left: 15px;
          z-index: 10;
        }
        .search-count_ranking li:nth-child(1)::before {
          background-position: 0 0;
        }
        .search-count_ranking li:nth-child(2)::before {
          background-position: -31px 0;
        }
        .search-count_ranking li:nth-child(3)::before {
          background-position: -62px 0;
        }
        .search-count_ranking li:nth-child(4)::before {
          background-position: -93px 0;
        }
        .search-count_ranking li:nth-child(5)::before {
          background-position: -124px 0;
        }
        .search-count_ranking li:nth-child(6)::before {
          background-position: -155px 0;
        }
        .search-count_ranking li:nth-child(7)::before {
          background-position: -186px 0;
        }
        .search-count_ranking li:nth-child(8)::before {
          background-position: -217px 0;
        }
        .search-count_ranking li:nth-child(9)::before {
          background-position: -248px 0;
        }
        .search-count_ranking li a {
          box-sizing: border-box;
          display: block;
          padding: 15px;
          position: relative;
          border: 1px solid #e5e5e5;
          transition: none;
        }
        .search-count_ranking li a:hover {
          padding: 14px;
          border: 2px solid #a30000;
          text-decoration: none;
        }
        .search-count_ranking li a:hover > .search-count_ranking_price {
          bottom: 14px;
          right: 14px;
        }
        .search-count_ranking_img {
          float: left;
          width: 140px;
          height: 105px;
        }
        .search-count_ranking_name {
          overflow: hidden;
          font-size: 16px;
          font-weight: bold;
          color: #333;
          line-height: 1.4;
          text-align: left;
        }
        .search-count_ranking_price {
          position: absolute;
          bottom: 15px;
          right: 15px;
          font-size: 16px;
          font-weight: bold;
          color: #a30000;
          line-height: 1;
        }
        .search-count_ranking_price .kaitorisouba {
          font-size: 12px;
          padding: 1px 3px;
          color: #fff;
          background: #aaa;
          border-radius: 3px;
          line-height: 22px;
          position: absolute;
          bottom: 32px;
          right: 76px;
          width: 4.4em;
          text-align: center;
          font-weight: normal;
        }
        .search-count_ranking_price span {
          font-size: 28px;
          font-weight: bold;
          vertical-align: baseline;
        }
        /* /201908追加　検索回数ランキングのデザイン変更 */
        .pref_list {
          border-bottom: 1px solid #e5e5e5;
          margin-bottom: 100px;
        }

        .pref_list dt {
          border-top: 1px solid #e5e5e5;
          padding-top: 30px;
          padding-bottom: 20px;
          font-weight: bold;
          font-size: 1.6rem;
        }
        .pref_list dd {
          float: left;
        }
        .pref_list ul {
          display: flex;
          justify-content: space-between;
          padding-bottom: 20px;
        }
        .pref_list li {
          margin-right: 10px;
          box-sizing: border-box;
          width: 110px;
          height: 36px;
          display: block;
          background-position: -10px -740px;
          text-align: center;
          font-size: 1.6rem;
          line-height: 32px;
          color: #ddd;
          background: #fff;
          border: #ddd 1px solid;
          border-radius: 3px;
        }
        .pref_list li a {
          display: block;
          color: #333;
          background: #f8f8f8;
          height: 100%;
          /* border: #ccc 1px solid; */
          /* border-radius: 3px; */
        }
        .pref_list li.hit {
          color: #ddd;
        }
        .pref_list li a:hover {
          text-decoration: none;
          background: #ccc;
        }
        /*-------------------------------------------------
review rating
--------------------------------------------------*/
        .star {
          display: inline-block;
          width: 116px;
          height: 21px;
          overflow: hidden;
          position: relative;
          vertical-align: text-bottom;
          margin-left: 10px;
        }
        .rating_ img {
          position: absolute;
          top: 0px;
          left: 0px;
        }
        .rating_none img {
          position: absolute;
          /* top:06; */
          left: -117px;
        }
        .rating_0_0 img {
          position: absolute;
          top: -60px;
          left: 0;
        }
        .rating_0_5 img {
          position: absolute;
          top: -30px;
          left: -94px;
        }
        .rating_1 img {
          position: absolute;
          top: 0;
          left: -94px;
        }
        .rating_1_0 img {
          position: absolute;
          top: 0;
          left: -94px;
        }
        .rating_1_5 img {
          position: absolute;
          top: -30px;
          left: -70px;
        }
        .rating_2 img {
          position: absolute;
          top: 0;
          left: -70px;
        }
        .rating_2_0 img {
          position: absolute;
          top: 0;
          left: -70px;
        }
        .rating_2_5 img {
          position: absolute;
          top: -30px;
          left: -47px;
        }
        .rating_3 img {
          position: absolute;
          top: 0;
          left: -47px;
        }
        .rating_3_0 img {
          position: absolute;
          top: 0;
          left: -47px;
        }
        .rating_3_5 img {
          position: absolute;
          top: -30px;
          left: -23px;
        }
        .rating_4 img {
          position: absolute;
          top: 0;
          left: -23px;
        }
        .rating_4_0 img {
          position: absolute;
          top: 0;
          left: -23px;
        }
        .rating_4_5 img {
          position: absolute;
          top: -30px;
          left: 0;
        }
        .rating_5 img {
          position: absolute;
          top: 0;
          left: 0;
        }
        .rating_5_0 img {
          position: absolute;
          top: 0;
          left: 0;
        }

        /* 国旗 */

        .flag {
          background: url(/img/kaitori/pc/icon/sprite_icon_flag.png) no-repeat;
          background-size: 30px 230px;
          background-position: 0 -26px;
          padding: 3px 0 3px 35px;
          height: 20px;
          font-weight: bold;
        }
        .flag_japan {
          background-position: 0 -29px;
        }
        .flag_world {
          background-position: 0 1px;
        }
        .flag_germany {
          background-position: 0 -59px;
        }
        .flag_italy {
          background-position: 0 -89px;
        }
        .flag_usa {
          background-position: 0 -119px;
        }
        .flag_england {
          background-position: 0 -149px;
        }
        .flag_france {
          background-position: 0 -179px;
        }
        .flag_sweden {
          background-position: 0 -209px;
        }
        .flag_korea {
          background-position: 0 -246px;
        }
        .flag_southafrica {
          background-position: 0 -266px;
        }
        .flag_canada {
          background-position: 0 -286px;
        }
        .flag_netherlands {
          background-position: 0 -306px;
        }
        .flag_india {
          background-position: 0 -326px;
        }

        .error_message {
          color: #cc0000;
          font-weight: bold;
        }
        /* purpose */

        .purpose .purpose_ol {
          margin-left: 2em; /* サイトに合せて調整 */
        }

        .purpose .purpose_ol li {
          list-style-type: none;
          counter-increment: cnt;
        }

        .purpose .purpose_ol li::before {
          content: '(' counter(cnt) ')';
          display: inline-block;
          margin-left: -2em; /* サイトに合せて調整 */
          width: 2em; /* サイトに合せて調整 */
        }

        .purpose .carview a {
          word-break: break-all;
          content: '';
          background: url(/img/kaitori/pc/common/icon_blank.png) no-repeat right center;
          background-size: 14px 14px;
          display: inline-block;
          padding-right: 20px;
        }
        .useful_article_list {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .useful_article_list a {
          display: table;
          width: 100%;
          min-height: 228px;
          margin: 20px 0;
          padding: 20px;
          position: relative;
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
          color: #333333;
        }
        .useful_article_list li:first-child a {
          margin-top: 0;
        }
        .useful_article_list a:hover {
          background-color: rgba(0, 0, 0, 0.04);
        }
        .useful_article_list .useful_article_img {
          display: table-cell;
          vertical-align: middle;
          width: 250px;
          height: 188px;
          padding-right: 20px;
        }
        .useful_article_list .useful_article_img img {
          width: 250px;
          height: 188px;
        }
        .useful_article_list .useful_article_information {
          color: #333333;
          display: table-cell;
          vertical-align: top;
          width: 100%;
          padding: 0;
          line-height: 2;
          position: relative;
        }
        .useful_article_list .useful_article_information::before {
          content: '詳細を見る';
          color: #0d79bf;
          position: absolute;
          right: 0;
          bottom: 0;
        }
        .useful_article_list .useful_article_information::after {
          content: '';
          width: 12px;
          height: 12px;
          background: url(/img/kaitori/sp/common/arrow_circle_blue.png) no-repeat;
          background-size: contain;
          position: absolute;
          right: 8.4rem;
          bottom: calc(1.6rem - 5px);
          margin: 0;
        }
        .useful_article_list .useful_article_information .useful_article_information_title {
          font-weight: bold;
          color: #0d79bf;
          line-height: 1.6;
        }

        /*　vendor_list
==================================================*/
        .vendor_list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .vendor_list li {
          display: flex;
          justify-content: center;
          width: calc(100% - 91.1rem);
          margin-bottom: 1.2rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        .vendor_list li img {
          width: 250px;
          height: 70px;
        }
        .vendor_list li a {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }
        .vendor_list li p {
          padding-top: 0.5rem;
          line-height: 1.2;
        }
        .vendor_list li a:hover {
          opacity: 0.8;
          text-decoration: none;
        }

        /*-------------------------------------------------
  sateio_cta
--------------------------------------------------*/
        .sateio_cta {
          background:
            url(/img/kaitori/common/sateio_cta_bg.png) no-repeat center,
            linear-gradient(to bottom, rgba(239, 186, 0, 1) 0%, rgba(239, 186, 0, 0.3) 100%);
          background-size: cover;
          padding: 3rem 3rem 4rem;
          margin-top: 8rem;
        }
        .sateio_cta .sateio_cta__catch {
          text-align: center;
        }
        .sateio_cta .sateio_cta__catch .sateio_cta__catch__name {
          display: inline-block;
          margin: 0 auto 2rem;
          background: #fcf5de;
          padding: 1.6rem 3rem;
          line-height: 1;
          min-width: 300px;
          border-radius: 10px;
          font-size: 3rem;
          font-weight: bold;
          text-align: center;
          position: relative;
        }
        .sateio_cta .sateio_cta__catch .sateio_cta__catch__name::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 10px solid transparent;
          border-top: 10px solid #fcf5de;
        }
        .sateio_cta .sateio_cta__catch img {
          display: block;
          margin: 0 auto 3.4rem;
        }
        .sateio_cta .sateio_cta__btn {
          display: block;
          margin: 0 auto;
          width: 450px;
          height: 70px;
          overflow: hidden;
        }
        .sateio_cta .sateio_cta__btn:hover img {
          transform: translateY(-70px);
        }

        /*--------------------------------------
  date
--------------------------------------*/
        .date {
          text-align: right;
          font-size: 1.2rem;
          color: #666;
        }

        /*--------------------------------------
  sort_btn
--------------------------------------*/
        .sort_btn {
          position: relative;
          width: 200px !important;
          height: 40px;
          opacity: 1 !important;
          background: #f8f8f8 url(/img/kaitori/sp/form/icon_narabikae.png) no-repeat left 15px center;
          background-size: 28px 19px;
          border-radius: 4px;
          border: 1px solid #ccc;
          text-align: center;
        }
        .sort_btn .label {
          position: absolute;
          width: 200px;
          font-size: 1.4rem;
          line-height: 1;
          top: 13px;
          right: -15px;
          color: #333;
          z-index: 1;
        }
        .sort_btn .form_select {
          position: relative !important;
          width: 200px !important;
          height: 40px;
          cursor: pointer;
          position: relative;
          z-index: 2;
        }
        .sort_btn .form_select.hasCustomSelect {
          -webkit-appearance: menulist-button;
          position: absolute;
          opacity: 0;
          height: 40px;
        }
        .sort_btn .form_select option {
          text-align: center;
          position: absolute;
          top: 0;
          right: 0;
        }
        .sort_btn .form_select.customSelect {
          display: none !important;
        }

        /*-------------------------------------------------
table
--------------------------------------------------*/
        .c-table {
          table-layout: fixed;
          width: 100%;
          border: 2px solid #ccc;
        }
        .c-table th,
        .c-table td {
          border: 1px solid #ccc;
          line-height: 1.8;
          padding: 0.8rem 1.6rem;
          vertical-align: middle;
        }
        .c-table tr:nth-of-type(1) th {
          background: #e7f4fd;
          text-align: center;
          font-weight: bold;
          line-height: 1.4;
        }
        .c-table th.title {
          background: #f7f7f7;
          font-weight: bold;
        }
        .c-table tr.is-emphasis > * {
          background: #fcf1f1;
          font-weight: bold;
        }

        /*-------------------------------------------------
other
--------------------------------------------------*/
        a.link_arrow {
          display: inline-block;
          background: url(/img/kaitori/pc/icon/icon_arrow.png) no-repeat left 0.7em/4px 6px;
          padding-left: 1.2rem;
        }

        a.link_arrow_circle {
          position: relative;
          padding-left: 1.8rem;
        }
        a.link_arrow_circle::before {
          content: '';
          background: #0d79bf url(/img/kaitori/pc/icon/icon_arrow_white.png) no-repeat;
          background-size: 7px 4px;
          background-position: center top 4px;
          width: 13px;
          height: 13px;
          display: block;
          border-radius: 50%;
          transform: rotate(90deg);
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }

        /*-------------------------------------------------
common_list
--------------------------------------------------*/
        .number_list {
          padding-inline-start: 2rem;
        }
        .number_list li {
          list-style: decimal;
        }

        .p-check_list {
          display: flex;
          flex-direction: column;
          border: 3px solid #e5e5e5;
          gap: 0.8rem;
          padding: 2.4rem;
        }
        .p-check_list li {
          position: relative;
          line-height: 1.4;
          padding-left: 2.8rem;
        }
        .p-check_list li::before {
          content: '';
          display: block;
          position: absolute;
          background: url(/img/kaitori/icon/icon_check_pink_bold.svg) no-repeat;
          background-size: 16px 16px;
          width: 16px;
          height: 16px;
          top: 3px;
          left: 0;
        }

        /*-------------------------------------------------
faq
--------------------------------------------------*/
        .p-faq {
          display: flex;
          flex-direction: column;
          background: #f2f2f2;
          border-radius: 8px;
          gap: 2.4rem;
          padding: 2.4rem;
        }
        .p-faq li {
          display: flex;
          background: #fff;
          border-radius: 8px;
          padding: 2.4rem;
        }
        .p-faq li img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          margin-right: 2.4rem;
        }
        .p-faq li .p-faq__comtents {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          padding-left: 4.2rem;
        }
        .p-faq li .p-faq__comtents .question {
          position: relative;
          font-size: 1.8rem;
          font-weight: bold;
        }
        .p-faq li .p-faq__comtents .question::before {
          content: '';
          position: absolute;
          background: url(/img/kaitori/pc/icon/icon_faq_q.png) no-repeat;
          background-size: 30px 30px;
          width: 30px;
          height: 30px;
          top: 0;
          left: -42px;
        }
        .p-faq li .p-faq__comtents .answer {
          position: relative;
        }
        .p-faq li .p-faq__comtents .answer::before {
          content: '';
          position: absolute;
          background: url(/img/kaitori/pc/icon/icon_faq_a.png) no-repeat;
          background-size: 30px 30px;
          width: 30px;
          height: 30px;
          top: 0;
          left: -42px;
        }

        /*-------------------------------------------------
上部固定 ページ内リンク
--------------------------------------------------*/
        .p-navi {
          display: none;
          position: -webkit-sticky;
          position: sticky;
          top: 0;
          background-color: #fff;
          padding: 1.6rem 0;
          z-index: 11;
          transition: 0.3s;
        }
        .p-navi.scroll {
          box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
        }
        .p-navi.is-block {
          display: block;
          transition: 0.3s;
        }
        .p-navi ul {
          display: flex;
          justify-content: center;
          column-gap: 1.6rem;
        }
        .p-navi ul li a,
        .p-navi ul li a:hover {
          display: flex;
          box-sizing: border-box;
          justify-content: center;
          align-items: center;
          border-radius: 25px;
          font-weight: bold;
          line-height: 1.2;
          min-width: 260px;
          padding: 1.2rem 3.2rem;
        }
        .p-navi ul li a {
          border: 2px solid #e5e5e5;
          color: #333;
        }
        .p-navi ul li a:hover {
          border: 2px solid #a30000;
          color: #a30000;
        }
        .p-navi ul li a::after,
        .p-navi ul li a:hover::after {
          content: '';
          display: block;
          width: 14px;
          height: 14px;
          padding-left: 0.8rem;
        }
        .p-navi ul li a::after {
          background: url(/img/kaitori/icon/icon_arrow_circle_gray_down.svg) no-repeat center center;
          background-size: 14px 14px;
        }
        .p-navi ul li a:hover::after {
          background: url(/img/kaitori/icon/icon_arrow_circle_red_down.svg) no-repeat center center;
          background-size: 14px 14px;
        }
      `}</style>
    </>
  )
}

export const MobilePage = () => {
  return (
    <>
      <>
        <meta charSet='UTF-8' />
        <title>&lt;?= $page_title; ?&gt;</title>
        <meta name='description' content='<?= $page_description; ?>' />
        <meta name='keywords' content='車選びドットコム,一括査定,車買取' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='/kaitori/' />
        <meta property='og:title' content='<?= $page_title; ?>' />
        <meta property='og:description' content='<?= $page_description; ?>' />
        <meta property='og:image' content='https://www.kurumaerabi.com/img/kaitori/og_img.png' />
        {/*?php include dirname(__FILE__).'/include/head.php'; ?*/}
        <Header withMainMenu={true} />
        <section className='hero_area'>
          <div className='hero_area_bg'>
            <h1 className='hero_area_title cw'>
              <picture>
                <source
                  srcSet='/img/kaitori/pc/index/mainvisual@1x.webp 1x ,/img/kaitori/pc/index/mainvisual.webp 2x'
                  type='image/webp'
                />
                <img
                  src='/img/kaitori/pc/index/mainvisual.webp'
                  alt='車買取・中古車査定 - 一括査定で最高額売却　車選びドットコム'
                  width={1200}
                  height={540}
                />
              </picture>
            </h1>
            <p className='center'>
              <img
                srcSet='/img/kaitori/pc/index/landing_visual_arrow_white@1x.png 1x,/img/kaitori/pc/index/landing_visual_arrow_white.png 2x'
                src='/img/kaitori/pc/index/landing_visual_arrow_white.png'
                alt='完全無料!今すぐ査定依頼スタート！概算価格もネットで分かる！'
                width={1060}
                height={130}
              />
            </p>
            {/*?php include dirname(__FILE__).'/include/inquiry_form.php'; ?*/}
          </div>
        </section>
        <p className='form_listed_description cw mt30'>
          <span>
            当サイトは株式会社ファブリカコミュニケーションズ（東証スタンダード上場　証券コード：4193）が運営しています。
          </span>
          <img src='/img/kaitori/common/logo_tse.png' alt='東証スタンダード上場ロゴ' width={45} height={58} />
        </p>
        <div className='contents_section shop_logo mb100'>
          <p>有名店から地域密着店舗まで提携先多数！安心の全国対応！</p>
          <img
            srcSet='/img/kaitori/pc/index/shop_logo@1x.png 1x,/img/kaitori/pc/index/shop_logo.png 2x'
            src='/img/kaitori/pc/index/shop_logo.png'
            alt='おもな提携先'
            width={1090}
            height={40}
          />
        </div>
        <section className='contents_section top_marketprice_search'>
          <h2 className='contents_sub_title'>匿名で車買取価格・相場表を調べる</h2>
          <p className='mb30'>
            車選びドットコム販売管理システムの買取価格・下取価格データから分析した車買取最新情報を一挙公開！
            <br />
            販売管理システム直結だから正確な情報をリアルタイムに閲覧できます。貴方の愛車の買取価格を事前にチェック、複数の買取店で査定して賢く売却先を決めましょう！{' '}
          </p>
          {/*?php include dirname(__FILE__).'/include/marketprice_direct.php'; ?*/}
          $keys ){'{'}
          if( empty( $makers[ $name ] ) ) {'{'}
          continue;
          {'}'}
          ?&gt;
          <table id='makerlistbycountry' className='makerList'>
            <tbody>
              {/*?php foreach( $_list_countries as $name =*/}
              <tr>
                <th>
                  <span className='flag flag_<?php echo $keys[0];?>'>{/*?php echo $name;?*/}</span>
                </th>
              </tr>
              <tr>
                <td>
                  <ul>
                    {/*?php foreach( $makers[ $name ] as $i =*/} $row ) {'{'}
                    if (!in_array($row['car_maker_id'],$disable_link_maker_arr)) {'{'}
                    ?&gt;
                    <li>
                      <a href="/kaitori/marketprice/carmaker/<?php echo $row['car_maker_id'] ?>/">
                        {/*?php echo $row[ 'car_maker_name' ];?*/}
                      </a>
                    </li>
                    {/*?php }
      }?*/}
                  </ul>
                </td>
              </tr>
              {/*?php }?*/}
            </tbody>
          </table>
        </section>
        <section className='contents_section top_search_ranking'>
          <h2 className='contents_sub_title'>車査定実績ランキング</h2>
          <p className='cornerCopy mb30'>
            直近3ヶ月間に中古車市場での取引実績が多い車種からランキング形式で紹介しています。
          </p>
          <ul className='search-count_ranking mb100 '>
            {/*?php
if(count($sateiRankingList)*/}
            0) {'{'}
            foreach ($sateiRankingList as $key =&gt; $car) {'{'} ?&gt;
            <li>
              <a
                href="/kaitori/marketprice/cartype/<?php echo $car['car_maker_id'].'/'.$car['car_name_id'] ?>/"
                className='clearfix'
              >
                <p className='search-count_ranking_img'>
                  {' '}
                  <img
                    className='lazyload'
                    data-src="<?php echo $car['imgurl'] ?>"
                    alt="<?php echo $car['car_name'] ?>の車買取相場"
                    width={140}
                    height={105}
                  />{' '}
                </p>
                <p className='search-count_ranking_name'>{/*?php echo $car['car_maker_name'], $car['car_name']; ?*/}</p>
                <p className='search-count_ranking_price'>
                  <span className='kaitorisouba'>買取相場</span>〜
                  <span>{/*?php echo $k-*/}priceFormat($car['price_max'], 10000) ?&gt;</span>
                  万円
                </p>
              </a>
            </li>
            {/*?php }
  }?*/}
          </ul>
        </section>
        {/*?php include dirname(__FILE__).'/include/ctabox_small.php'; ?*/}
        <section className='contents_section top_review'>
          <h2 className='contents_sub_title'>車買取業者ランキング</h2>
          {/*?php if(!empty($companyGroup)): ?*/}
          {/*?php for($i = 0; $i < 3; $i++): ?*/}
          {/*?php $companyArr[] = $companyGroup[$i]['company_id']; ?*/}
          {/*?php if(!empty($companyGroup[$i]['total_review'])): ?*/}
          <div className='company_shop-ranking ranking_<?php echo $i+1; ?>'>
            <span className='ranking_position' id='ranking_position_<?php echo $i+1; ?>'>
              {/*?php echo $i+1; ?*/}
            </span>
            <div className='shop-ranking_inner'>
              <a href="<?php printf('/kaitori/company/detail/%s/', $companyGroup[$i]['company_id']); ?>">
                <div className='shop-ranking_inner-title'>
                  <h3>{/*?php printf('%s(%s)', $companyGroup[$i]['short_name'], $companyGroup[$i]['name']); ?*/}</h3>
                  <div className='inner-title_info'>
                    <span className='small'>評価</span>
                    <span className="star rating_<?php echo $k->rateFormat(number_format($companyGroup[$i]['point'],1)); ?>" />
                    <div className='inner-title_info_review mr30'>
                      <span>{/*?php echo number_format($companyGroup[$i]['point'],2); ?*/}</span>
                      <span className='small'>点</span>
                    </div>
                    <span className='mr30 small'>口コミ/レビュー</span>
                    <div className='inner-title_info_review review_number'>
                      <span className=''>{/*?php echo $companyGroup[$i]['total_review']; ?*/}</span>
                      <span className='small'>件</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/*?php endif; ?*/}
          {/*?php endfor; ?*/}
          <div className='inner-review_more mt20'>
            <a href='/kaitori/company/'>ランキングをもっと見る</a>
          </div>
          {/*?php endif; ?*/}
          {/*?php if (!empty($reviewList)) : ?*/}
          <section className='mb100'>
            <h2 className='contents_sub_title'>車買取業者の評判・口コミ（新着）</h2>
            <p className='mb20'>
              今までに一括査定を受けたことがあるユーザーからの体験談を口コミとして掲載しています。査定価格だけでなく接客やお店の雰囲気、査定スピードや来店時の満足度など5つの評価軸を点数で評価。同時に、実際来店して感じたユーザーの感想も掲載しました。
            </p>
            {/*?php include dirname(__FILE__).'/include/review_list.php'; ?*/}
          </section>
          {/*?php endif; ?*/}
        </section>
        {/*?php include dirname(__FILE__).'/include/ctabox_small.php'; ?*/}
        <section className='top_shop_search mb100'>
          <div className='contents_section'>
            <h2 className='contents_sub_title mb40'>車買取専門店を地域から探す</h2>
            <p>
              全国の車買取店の中から、お近くの車買取店を見つけてください。周辺地図や営業時間、定休日などを各店舗ごとにお調べいただけます。まずは、店舗を探したい都道府県を下から選んで検索をスタートしてください。
            </p>
            <div className='shop_map'>
              <div className='shop_map_list hokkaido_tohoku'>
                <dl>
                  <dt>北海道・東北</dt>
                  <dd>
                    <ul className='clearfix'>
                      {/*?php if (count($_f_areas['北海道・東北'])*/}0) {'{'}
                      foreach ($_f_areas['北海道・東北'] as $key =&gt; $pref) {'{'} ?&gt;
                      <li>
                        <a href='/kaitori/shop/<?php echo $pref; ?>/'>{/*?php echo $pref; ?*/}</a>
                        <span>{/*?php echo (isset($shopCount[$pref]) ? '('.$shopCount[$pref].')' : '(--)'); ?*/}</span>
                      </li>
                      {/*?php }
    } ?*/}
                    </ul>
                  </dd>
                </dl>
              </div>
              <div className='shop_map_list kanto_koshinnetsu'>
                <dl>
                  <dt>関東・甲信越</dt>
                  <dd>
                    <ul className='clearfix'>
                      {/*?php if (count($_f_areas['関東・甲信越'])*/}0) {'{'}
                      foreach ($_f_areas['関東・甲信越'] as $key =&gt; $pref) {'{'} ?&gt;
                      <li>
                        <a href='/kaitori/shop/<?php echo $pref; ?>/'>{/*?php echo $pref; ?*/}</a>
                        <span>{/*?php echo (isset($shopCount[$pref]) ? '('.$shopCount[$pref].')' : '(--)'); ?*/}</span>
                      </li>
                      {/*?php }
    } ?*/}
                    </ul>
                  </dd>
                </dl>
              </div>
              <div className='shop_map_list tokai_hokuriku'>
                <dl>
                  <dt>東海・北陸</dt>
                  <dd>
                    <ul className='clearfix'>
                      {/*?php if (count($_f_areas['東海・北陸'])*/}0) {'{'}
                      foreach ($_f_areas['東海・北陸'] as $key =&gt; $pref) {'{'} ?&gt;
                      <li>
                        <a href='/kaitori/shop/<?php echo $pref; ?>/'>{/*?php echo $pref; ?*/}</a>
                        <span>{/*?php echo (isset($shopCount[$pref]) ? '('.$shopCount[$pref].')' : '(--)'); ?*/}</span>
                      </li>
                      {/*?php }
    } ?*/}
                    </ul>
                  </dd>
                </dl>
              </div>
              <div className='shop_map_list kansai'>
                <dl>
                  <dt>関西</dt>
                  <dd>
                    <ul className='clearfix'>
                      {/*?php if (count($_f_areas['関西'])*/}0) {'{'}
                      foreach ($_f_areas['関西'] as $key =&gt; $pref) {'{'} ?&gt;
                      <li>
                        <a href='/kaitori/shop/<?php echo $pref; ?>/'>{/*?php echo $pref; ?*/}</a>
                        <span>{/*?php echo (isset($shopCount[$pref]) ? '('.$shopCount[$pref].')' : '(--)'); ?*/}</span>
                      </li>
                      {/*?php }
    } ?*/}
                    </ul>
                  </dd>
                </dl>
              </div>
              <div className='shop_map_list chugoku_shikoku'>
                <dl>
                  <dt>中国・四国</dt>
                  <dd>
                    <ul className='list_nofloat'>
                      {/*?php if (count($_f_areas['中国・四国'])*/}0) {'{'}
                      foreach ($_f_areas['中国・四国'] as $key =&gt; $pref) {'{'} ?&gt;
                      <li>
                        <a href='/kaitori/shop/<?php echo $pref; ?>/'>{/*?php echo $pref; ?*/}</a>
                        <span>{/*?php echo (isset($shopCount[$pref]) ? '('.$shopCount[$pref].')' : '(--)'); ?*/}</span>
                      </li>
                      {/*?php }
    } ?*/}
                    </ul>
                  </dd>
                </dl>
              </div>
              <div className='shop_map_list kyushu_okinawa'>
                <dl>
                  <dt>九州・沖縄</dt>
                  <dd>
                    <ul className='list_nofloat'>
                      {/*?php if (count($_f_areas['九州・沖縄'])*/}0) {'{'}
                      foreach ($_f_areas['九州・沖縄'] as $key =&gt; $pref) {'{'} ?&gt;
                      <li>
                        <a href='/kaitori/shop/<?php echo $pref; ?>/'>{/*?php echo $pref; ?*/}</a>
                        <span>{/*?php echo (isset($shopCount[$pref]) ? '('.$shopCount[$pref].')' : '(--)'); ?*/}</span>
                      </li>
                      {/*?php }
    } ?*/}
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </section>
        <section className='contents_section top_faq'>
          <h2 className='contents_sub_title'>車買取でよくあるご質問（FAQ）</h2>
          <div className='mb100'>
            <div className='faq_contents_area'>
              <div className='faq_contents'>
                <div className='faq_img'>
                  <img
                    className='lazyload'
                    data-src='/img/kaitori/pc/index/manual_ikkatsu.jpg'
                    width='690px'
                    height='460px'
                    alt='一括査定のメリットとデメリットは？'
                  />
                </div>
                <div className='faq_text'>
                  <h3 className='faq_question'>一括査定のメリットとデメリットは？</h3>
                  <p className='faq_answer'>
                    一括査定サービスの一番のメリットは、手間をかけずに愛車の最高額がすぐにわかる点です。
                    一方で、複数の買取業者と一度に連絡を取るため、複数かかってくる電話の応対が大変という印象を持つ方も多いようです。
                  </p>
                  <div className='inner-review_more mt10'>
                    <a href='/kaitori/manual/ikkatsu/'>
                      <span>続きを読む</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='faq_contents_area'>
              <div className='faq_contents'>
                <div className='faq_img'>
                  <img
                    className='lazyload'
                    data-src='/img/kaitori/pc/index/manual_satei_online.jpg'
                    width={690}
                    height={460}
                    alt='匿名で買取相場を調べる方法は？'
                  />
                </div>
                <div className='faq_text'>
                  <h3 className='faq_question'>匿名で買取相場を調べる方法は？</h3>
                  <p className='faq_answer'>
                    おおよその買取相場を調べるなら一括査定サイトで車種ごとの買取相場を調べる方法が最適です。
                    その他にも自分の車に近い査定額を知りたい場合は”中古車販売サイト”、
                    買い替えを考えているなら”下取りシミュレーション”を活用することをおすすめします。
                  </p>
                  <div className='inner-review_more mt10'>
                    <a href='/kaitori/manual/satei/satei_online/'>
                      <span>続きを読む</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='faq_contents_area'>
              <div className='faq_contents'>
                <div className='faq_img'>
                  <img
                    className='lazyload'
                    data-src='/img/kaitori/pc/index/manual_sale_dealer.jpg'
                    width={690}
                    height={460}
                    alt='車買取と下取り、高価買取を狙うならどっちがいい？'
                  />
                </div>
                <div className='faq_text'>
                  <h3 className='faq_question'>車買取と下取り、高価買取を狙うならどっちがいい？</h3>
                  <p className='faq_answer'>
                    愛車をより高く売却したいと考えるなら、買取サービスの利用をおすすめします。
                    買取は下取りに比べ査定額が高くなりやすい傾向にあり、人気装備などが買取価格に反映され、想定以上の高値が付くケースがあります。
                  </p>
                  <div className='inner-review_more mt10'>
                    <a href='/kaitori/manual/sale/sale_dealer/'>
                      <span>続きを読む</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*?php include dirname(__FILE__).'/include/ctabox_small.php'; ?*/}
        {/*?php include dirname(__FILE__).'/include/footer.php'; ?*/}
      </>

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
        .wrapper .container .section-header {
          border-bottom: #ccc 1px solid;
          background-image: none;
          background: #ebebeb;
          background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ebebeb));
          background: -moz-linear-gradient(top, #fff, #ebebeb);
          background: -ms-linear-gradient(top, #fff, #ebebeb);
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#EBEBEB', GradientType=0);
          text-indent: 0;
          height: auto;
          margin: 15px 0 10px 0;
        }
        .wrapper .container .section-header span {
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

        .wrapper {
          width: 100%;
          text-align: left;
          line-height: 1.5;
        }
        .wrapper .container {
          width: 950px;
          margin: 0 auto;
        }
        .wrapper .container .inner_container {
          width: 800px;
          margin: 0 auto;
        }

        /*　共通部分
==================================================*/
        .wrapper .container h3 {
          display: block;
          margin: 10px 0;
          width: 800px;
          height: 50px;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_menu_list02.png') no-repeat;
          text-indent: -9999pt;
        }
        .wrapper .container .btn_02 {
          margin: 30px auto 10px;
          display: block;
          width: 458px;
          height: 114px;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_btn.png') no-repeat;
          text-indent: -9999pt;
          border: none;
          cursor: pointer;
        }
        .wrapper .container .btn_02:hover {
          background-position: 0 -114px;
        }
        .wrapper .container .btn_sanko {
          text-align: center;
          margin: 10px 0;
        }
        .hidden {
          display: none;
        }

        /*　トップ画像
==================================================*/
        .wrapper .container #kaitori-top {
          width: 277px;
          height: 250px;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_top.jpg') no-repeat;
          padding: 150px 0 0 523px;
          text-indent: -9999pt;
        }
        /*　トップ画像の査定ボタン
==================================================*/
        .wrapper .container #kaitori-top .btn_01 {
          display: block;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_btn.png') no-repeat;
          background-position: 0 -228px;
          height: 124px;
          width: 257px;
          text-indent: -9999pt;
          border: 0;
          cursor: pointer;
        }
        .wrapper .container #kaitori-top .btn_01:hover {
          background-position: 0 -352px;
        }

        /*　メニューバー
==================================================*/
        .wrapper .container #menu {
          height: 54px;
          padding: 10px 0;
        }
        .wrapper .container #menu li {
          float: left;
        }
        .wrapper .container #menu li a {
          text-indent: -9999pt;
          display: block;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_menu_list01.png') no-repeat;
          height: 54px;
        }
        .wrapper .container #menu .menu_flow a {
          width: 161px;
          height: 54px;
        }
        .wrapper .container #menu .menu_flow a:hover,
        .wrapper .container #menu .menu_flow a.selected {
          background-position: 0 -54px;
        }
        .wrapper .container #menu .menu_shop a {
          width: 206px;
          background-position: -161px 0;
        }
        .wrapper .container #menu .menu_shop a:hover,
        .wrapper .container #menu .menu_shop a.selected {
          background-position: -161px -54px;
        }
        .wrapper .container #menu .menu_tips a {
          width: 165px;
          background-position: -367px 0;
        }
        .wrapper .container #menu .menu_tips a:hover {
          background-position: -367px -54px;
        }
        .wrapper .container #menu .menu_faq a {
          width: 122px;
          background-position: -532px 0;
        }
        .wrapper .container #menu .menu_faq a:hover,
        .wrapper .container #menu .menu_faq a.selected {
          background-position: -532px -54px;
        }
        .wrapper .container #menu .menu_kiyaku a {
          width: 146px;
          background-position: -654px 0;
        }
        .wrapper .container #menu .menu_kiyaku a:hover,
        .wrapper .container #menu .menu_kiyaku a.selected {
          background-position: -654px -54px;
        }

        /*　買取店の紹介
==================================================*/
        .wrapper .container #kaitori_shop h3 {
          background-position: 0 -50px;
        }
        .wrapper .container #kaitori_shop p {
          margin: 10px 0;
        }
        .wrapper .shoplist {
          width: 780px;
          margin: 0 auto;
          border: 1px #83d7f9 solid;
        }
        .wrapper .shoplist li {
          float: left;
          text-align: center;
          width: 100px;
          padding: 10px 15px;
          list-style-type: none;
          font-size: 10px;
        }

        /*　高額買取のコツ
==================================================*/
        .wrapper .container #kaitori_tips h3 {
          background-position: 0 -100px;
        }
        .wrapper .container #kaitori_tips p {
          margin: 10px;
        }
        .wrapper .container #kaitori_tips dl {
          margin: 0 auto;
          padding: 10px 20px;
          width: 740px;
          border: 1px #83d7f9 solid;
        }
        .wrapper .container #kaitori_tips dl dt {
          border-left: #06c solid 5px;
          border-bottom: 1px #83d7f9 solid;
          padding: 0 0 5px 5px;
          font-size: 16px;
          font-weight: bold;
          margin: 10px 10px 10px 0;
          color: #00459d;
        }
        .wrapper .container #kaitori_tips dl dd {
          margin: 0 10px 20px 10px;
        }
        .wrapper .container #kaitori_tips dl dd p {
          width: 330px;
          margin: 5px 10px;
          padding: 10px;
          background-color: #e3f7ff;
          border: 1px #83d7f9 solid;
        }
        /* ショップ詳細ページ */

        /*　ショップ紹介
==================================================*/
        .wrapper .container #shop_page {
          text-align: center;
        }
        .wrapper .container #shop_page h3 {
          background-position: 0 -300px;
        }
        .wrapper .container #shop_page p {
          margin: 20px 0;
        }
        .wrapper .container #shop_page pre {
          text-align: left;
        }
        .wrapper .container #shop_page .name {
          display: block;
          background: url('http://www.webike.net/sys_images/ktr00/shop_topics.png') no-repeat;
          height: 55px;
          text-indent: -9999pt;
          border-bottom: 1px #83d7f9 solid;
          margin: 5px 0 0 0;
        }
        /* バイク王 */
        .wrapper .container #shop_page .name_01 {
          background-position: -0px -0px;
        }
        /* バイク査定ドットコム */
        .wrapper .container #shop_page .name_02 {
          background-position: -0px -55px;
        }
        /* バイクボーイ */
        .wrapper .container #shop_page .name_03 {
          background-position: -0px -110px;
        }
        /* ゲオバイク */
        .wrapper .container #shop_page .name_04 {
          background-position: -0px -165px;
        }
        /* ドリームカンパニー */
        .wrapper .container #shop_page .name_05 {
          background-position: -0px -220px;
        }
        /* バイクショップ ロミオ */
        .wrapper .container #shop_page .name_06 {
          background-position: -0px -275px;
        }
        .wrapper .container #shop_page .shop_topics {
          margin: 0 auto;
          padding: 0 20px;
          width: 740px;
          border: 1px #83d7f9 solid;
        }
        .wrapper .container #shop_page .shop_topics pre {
          margin: 20px 0 0 0;
        }
        .wrapper .container #shop_page dl {
          text-align: left;
          margin: 10px 0 0 0;
        }
        .wrapper .container #shop_page dl dt {
          font-weight: bold;
        }
        .wrapper .container #shop_page dl dd {
          margin: 0 0 10px 0;
        }
        .wrapper .container #shop_page .shop_topics p {
          text-align: left;
        }
        .wrapper .container #shop_page h4 {
          text-align: left;
          border-left: #06c 5px solid;
          font-size: 16px;
          padding: 0 0 0 5px;
        }
        .wrapper .container #shop_page table {
          background: #fff;
          border-collapse: separate;
          border: 1px solid #cbcbcb;
          margin: 20px;
          width: 700px;
          text-align: left;
        }
        .wrapper .container #shop_page table td {
          padding: 5px;
        }
        .wrapper .container #shop_page th {
          width: 180px;
          background: #e8e8e8;
          border: 1px solid #cbcbcb;
          padding: 5px;
        }
        .wrapper .container #shop_page tr {
          background: #fff;
          border: 1px solid #cbcbcb;
        }
        .wrapper .container #shop_page td {
          background: #fff;
          border: 1px solid #cbcbcb;
        }
        /* ご利用規約ページ */

        /*　ページ全体レイアウト
==================================================*/
        .wrapper .container #kaitori_kiyaku h3 {
          background-position: 0 -150px;
        }
        .wrapper .container #kaitori_kiyaku {
          width: 800px;
        }
        /*　利用規約についての説明
==================================================*/
        .wrapper .container #kaitori_kiyaku .kiyaku_txt {
          margin: 10px 20px;
        }
        .wrapper .container #kaitori_kiyaku .kiyaku_txt p {
          margin: 2px 7px;
        }
        /*　規約内容
==================================================*/
        .wrapper .container #kaitori_kiyaku h4 {
          display: block;
          width: 780px;
          height: 32px;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_title.gif') no-repeat;
          background-position: 0 -96px;
          margin: 10px auto;
          text-indent: -9999pt;
        }
        .wrapper .container #kaitori_kiyaku .kiyaku_txt dl dt {
          margin: 20px 0 0 0;
          font-weight: bold;
          font-size: 14px;
          color: #0045a4;
          border-bottom: 1px #83d7f9 solid;
        }
        .wrapper .container #kaitori_kiyaku .kiyaku_txt dl dd {
          margin: 5px;
        }
        /* よくある質問 */

        /*　ページ全体レイアウト
==================================================*/
        .wrapper .container #kaitori_faq h3 {
          background-position: 0 -200px;
        }
        .wrapper .container #kaitori_faq .faq_txt {
          width: 780px;
          margin: 10px auto;
        }
        /*　質問一覧
==================================================*/
        .wrapper .container #kaitori_faq .faq_txt .list_faq {
          margin: 10px;
        }
        .wrapper .container #kaitori_faq .faq_txt .list_faq a {
          color: #000;
        }
        .wrapper .container #kaitori_faq .faq_txt .list_faq li ul {
          margin: 5px 0;
        }
        .wrapper .container #kaitori_faq .faq_txt .list_faq li ul li {
          margin: 5px 25px;
        }
        .wrapper .container #kaitori_faq .faq_txt .list_faq p {
          border-left: 5px solid #0066cc;
          padding: 0 0 0 5px;
          margin: 20px 0 10px 0;
          font-weight: bold;
          font-size: 14px;
          color: #0045a4;
          border-bottom: 1px #83d7f9 solid;
        }
        .wrapper .container #kaitori_faq .faq_txt .list_faq .faq_icon {
          margin: 0 5px 0 0;
          color: #ff8b24;
        }
        /*　回答一覧の見出し画像
==================================================*/
        .wrapper .container #kaitori_faq .faq_txt h4 {
          display: block;
          width: 780px;
          height: 32px;
          background: url('http://www.webike.net/sys_images/ktr00/kaitori_title.gif') no-repeat;
          margin: 20px 0;
          text-indent: -9999pt;
        }
        .wrapper .container #kaitori_faq .faq_txt .faq_02 {
          background-position: 0 -32px;
        }
        .wrapper .container #kaitori_faq .faq_txt .faq_03 {
          background-position: 0 -64px;
        }
        /*　回答一覧
==================================================*/
        .wrapper .container #kaitori_faq .faq_txt .faq_detail {
          padding: 0 20px 0 20px;
        }
        .wrapper .container #kaitori_faq .faq_txt .faq_detail dt {
          background: url('http://www.webike.net/sys_images/ktr00/faq_icon.gif') no-repeat;
          background-position: -10px -10px;
          padding: 10px 0 10px 45px;
          margin: 15px 0 10px 0;
          font-weight: bold;
          font-size: 14px;
          color: #0045a4;
          border-bottom: 1px #83d7f9 solid;
        }
        .wrapper .container #kaitori_faq .faq_txt .faq_detail dd {
          background: url('http://www.webike.net/sys_images/ktr00/faq_icon.gif') no-repeat;
          background-position: -10px -60px;
          padding: 7px 0 20px 45px;
          margin: 10px 0 10px 25px;
        }
        .wrapper .container #kaitori_faq .faq_txt .faq_detail dd span {
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
