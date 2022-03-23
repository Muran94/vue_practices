import { createStore } from 'vuex'

export default createStore({
  state: {
    mails: [
      {
        id: '01',
        sentAt: '2022/01/13 19:33:02',
        title: 'amazon | 欲しいものリストに登録されている商品がタイムセール中です！',
        body: 'いますぐお買い求めください。',
        isFavorite: false,
      },
      {
        id: '02',
        sentAt: '2022/01/13 21:44:05',
        title: '【freee開業】紹介キャンペーン実施中',
        body: 'freee開業のご紹介でfreeeクーポンをプレゼント',
        isFavorite: false,
      },
      {
        id: '03',
        sentAt: '2022/01/15 14:02:00',
        title: 'RDBMS利用システムの、プログラムコード部分の設計で迷子になっている | teratail NEWSLETTER【テラテイル】',
        body: 'ご不明点などございましたら、お気軽にお問い合わせ下さい。 また、新規機能に対するご意見・フィードバックもお待ちしております。今後ともteratailをよろしくお願い致します。',
        isFavorite: false,
      },
      {
        id: '04',
        sentAt: '2022/01/18 19:33:02',
        title: 'You don\'t need to be a coder to build software',
        body: `Until recently, there have only been two ways to take your passion and turn it into a web application or online business.

              1) Spend years learning how to code.
              2) Spend tens of thousands of dollars outsourcing the work to engineers.

              Bubble solves these problems.
                Bubble's visual web editor makes design and development easy, so you can focus on building the best product. 
              With Bubble anyone can:
              Develop.Build any web app with no code.
                Design.Create pixel - perfect designs.
                  Deploy.Host your app on Bubble's robust, scalable infrastructure. 
              Prototype, Launch, Iterate, and Scale with Bubble. 
              Ready to start ?`,
        isFavorite: false,
      },
      {
        id: '05',
        sentAt: '2022/01/21 19:33:02',
        title: 'コードレビューで嫌われる人の特徴7選',
        body: `
              Dear great hackers,

              こんにちは！いつもQiitaをご利用いただきありがとうございます。

              Qiita運営からのお知らせ
              2022年のRailsの開発現場事情について語ろう！を4/7(木)オンライン開催！🚀
              2022年のRailsの開発現場、取り巻く環境はどうなっているのか。現在のベストプラクティスや新機能にどう向き合っていくべきなのかを学び、これからのRails開発について考えるオンライントークイベントです。
              参加者抽選でAirPods Proのプレゼントもありますので、ぜひご参加ください🙌

              開催日：2022年4月7日(木)
              時間：19:00〜21:00（開場18:50）
              場所：Zoomにてオンライン配信
              参加費：無料（要事前申込）
              `,
        isFavorite: false,
      },
    ]
  },
  getters: {
  },
  mutations: {
    toggleFavorite(state, mailId) {
      const mail = state.mails.filter(mail => { return mail.id == mailId })[0];
      mail.isFavorite = !mail.isFavorite;
    }
  },
  actions: {
  },
  modules: {
  }
})
