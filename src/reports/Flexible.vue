
<template>
    <section class="sheet">
        <div class="row_1">
            <h1 class="text-center">{{ contents.name }}</h1>
        </div>
        <div class="row_2">
            <ul class="text-right">
                <li>No {{ contents.no }}</li>
                <li>{{ contents.date }}</li>
            </ul>
        </div>
        <div class="row_3">
            <div class="col_1">
                <ul>
                    <li>
                        <h2 class="customer_name">{{ contents.to.name }} 御中</h2>
                    </li>
                    <li>〒{{ contents.to.postal_code }}</li>
                    <li>{{ contents.to.address }}</li>
                </ul>
            </div>
            <div class="col_2">
                <ul >
                    <li>
                        <h2>{{ contents.from.name }}</h2>
                    </li>
                    <li>〒{{ contents.from.postal_code }}</li>
                    <li>{{ contents.from.address }}</li>
                    <li>{{ contents.from.building }}</li>
                    <li>TEL: {{ contents.from.tel }}</li>
                    <li>FAX: {{ contents.from.fax }}</li>
                </ul>
                <img class="stamp" src="report/tatekawa-black.png">
            </div>
            <div class="clear-element"></div>
        </div>

        <div class="row_4">
            <p>下記のとおりご請求申し上げます。</p>

            <table class="summary">
                <tbody>
                    <tr>
                        <th>合計金額</th>
                        <td>{{ contents.summary.total.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="row_5">
            <table class="detail">
                <thead>
                    <tr>
                        <th v-for="header in contents.headers" :key="header.name" :style="{width: header.width }">
                            {{ header.name }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in contents.items" :key="item.name" class="dataline">
                        <td class="text-left"> {{ item.name }}</td>
                        <td> {{ item.unit_price.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }) }} </td>
                        <td> {{ item.amount }} </td>
                        <td> {{ item.sub_total.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }) }} </td>
                    </tr>
                    <tr v-for="dummy_rows of (14 - contents.items.length)" :key="dummy_rows" class="dataline">
                        <td v-for="dummy_cols of contents.headers.length" :key="dummy_cols"/>
                    </tr>
                    <tr>
                        <td class="space" rowspan="3" colspan="2"> </td>
                        <th> 小計 </th>
                        <td> {{ contents.summary.sub_total_sum.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }) }} </td>
                    </tr>
                    <tr>
                        <th> 消費税 </th>
                        <td> {{ contents.summary.tax.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }) }} </td>
                    </tr>
                    <tr>
                        <th> 合計 </th>
                        <td> {{ contents.summary.total.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }) }} </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <ul>
            <li>振込先</li>
            <li>名義：{{ contents.bank.account }}</li>
            <li>{{ contents.bank.name }} {{ contents.bank.branch }} {{ contents.bank.type }} {{ contents.bank.account_number }}</li>
        </ul>
        <p>※お振込み手数料は御社ご負担にてお願い致します。</p>
    </section>
</template>

<script lang="ts">

export default {
  name: 'ReportFlexible',
  setup() {
    /* set report paper size to A4 for browser rendering. */
    document.body.classList.add('A4')
    /* set report paper size to A4 for printer. */
    const style = document.createElement('style');
      style.innerHTML = `@page {size: A4}`;
    document.head.appendChild(style);
  },
  data() {
    return {
      contents: { 
        'name': '御請求書',
        'no': '00-0001',
        'date': '2021年8月20日',
        'to': {
          'name': '有限会社 未来企画',
          'postal_code': '000-0000',
          'address': '沖縄県那覇市首里'
        },
        'from': {
          'name': '雲黒斎家元勝手居士',
          'postal_code': '000-0000',
          'address': '東京都文京区向丘2-17-4',
          'building': '浄心寺',
          'tel': '00-0000-0000',
          'fax': '00-0000-0000'
        },
        'headers': [
          {'name': '品名', 'width': '50%'},
          {'name': '単価', 'width': '18%'},
          {'name': '数量', 'width': '14%'},
          {'name': '金額', 'width': '18%'},
        ],
        'items': [
          {'name': '上納金', 'unit_price': 40000, 'amount': 1, 'sub_total': 40000},
          {'name': '手ぬぐい', 'unit_price': 3000, 'amount': 3, 'sub_total': 9000},
          {'name': '湯呑', 'unit_price': 1000000, 'amount': 1, 'sub_total': 1000000},
        ],
        'summary': {
          'sub_total_sum': 1049000,
          'tax': 10490,
          'total': 1059490,
        },
        'bank': {
          'account': 'ユ）ミライキカク',
          'name': '沖縄銀行',
          'branch': '〇〇支店',
          'type': '普通',
          'account_number': '00000000',
        }
      }
    }
  },
  components: {
  }
}
</script>

<style scoped>

/* 要素の初期化 */
* {
  /* マージン・パディングをリセットした方がデザインしやすい */
  margin: 0;
  padding: 0;
  /* デフォルトのフォント */
  color: #191970;
  /*
  font-family: "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", YuGothic, sans-serif;
  */
  font-size: 11pt;
  font-weight: normal;
  /* 背景色・背景画像を印刷する（Chromeのみで有効） */
  -webkit-print-color-adjust: exact;
}

/* リスト初期化 */
ul {
  list-style: none;
  padding-left: 0;
}

/* ページレイアウト (section.sheet を１ページとする) */
.sheet {
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  page-break-after: always;

  /* 用紙サイズ A4 */
  height: 297mm;
  width: 210mm;

  /* 余白サイズ */
  padding-top: 32mm;
  padding-left: 27mm;
  padding-right: 27mm;
}

/* プレビュー用のスタイル */
@media screen {
  body {
    background: #e0e0e0;
    /*
    -webkit-print-color-adjust: exact;
    */
  }
  .sheet {
    background: white; /* 背景を白く */
    box-shadow: 0 0.5mm 2mm rgba(0, 0, 0, 0.3); /* ドロップシャドウ */
    margin: 5mm auto;
  }
}

/* 汎用クラス */
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.clear-element {
  clear: both;
}

/* 大枠の指定 */

div.row_1 {
  height: 14mm;
}
div.row_2 {
  height: 12mm;
}

div.row_3 {
  height: 55mm;
}
div.row_3 div.col_1 {
  width: 90mm;
  float: left;
}
div.row_3 div.col_2 {
  position: relative;
  z-index: 2;
  padding-top: 10mm;
  float: left;
}
div.row_4 {
  height: 18mm;
}
div.row_5 {
  height: 120mm;
}
div.row_6 {
  height: 18mm;
}

/* 個別のスタイル指定 */


/* タイトル */
h1 {
  background: #3366cc;
  font-size: 30px;
  font-weight: normal;
  letter-spacing: 30px;
  color: #ffffff;
}

/* 顧客名・自社名 */
h2 {
  font-size: 20px;
  font-weight: normal;
}

/* 顧客名 */
h2.customer_name {
  text-decoration: underline;
}

img.stamp{
  position: absolute;
  z-index: 1;
  top: 10mm;
  left: 38mm;
  height: 17mm;
  width: 17mm;
}

/* テーブル共通 */
table,
th,
td {
  border: 1px #264d99 solid;
  border-collapse: collapse;
  padding: 1px 5px;
}

table th {
  background: #3366cc;
  font-weight: normal;
  color: #ffffff;
}
table td {
  text-align: right;
}

/* テーブル 総額欄 */
table.summary th {
  font-size: 14pt;
  width: 32mm;
}
table.summary td {
  font-size: 14pt;
  width: 40mm;
}

/* テーブル 明細欄 */
table.detail {
  width: 100%;
}
table.detail tr {
  height: 6mm;
}
table.detail th.item {
  width: 50%;
}
table.detail th.unit_price {
  width: 18%;
}
table.detail th.amount {
  width: 14%;
}
table.detail th.subtotal {
  width: 18%;
}

table.detail td.space {
  border-left-style: hidden;
  border-bottom-style: hidden;
}
table.detail tr.dataline:nth-child(odd) td {
  background-color: #ccddff;
}
table.detail tr.dataline:nth-child(even) td {
  background-color: #ffffff;
}
</style>
