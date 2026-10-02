const quizData = [
    {
        question: "問題 1:\nデータエンジニアは、メモリ使用量を削減しパフォーマンスを向上させるために、Deltaテーブルから一部の列のみを読み込みたいと考えています。どのSpark DataFrame操作を使用すべきでしょうか?",
        options: [
            "(A) groupBy",
            "(B) orderBy",
            "(C) select",
            "(D) filter"
        ],
        answerIndex: 2,
        explanation: "(C) DataFrameから特定の列を選択（抽出）して読み込むための正しい操作は select メソッドです。\n(A) groupBy は特定の列に基づいてデータをグループ化・集約するために使用します。\n(B) orderBy はデータを並べ替えるために使用します。\n(D) filter は特定の条件に基づいて「行」を絞り込むために使用します（列の選択ではありません）。"
    },
    {
        question: "問題 2:\nデータエンジニアはコスト削減とクラウド支出の最適化を目指しています。既存のSLAを維持しながらクラウドコストを削減するため、Databricks Serverlessの利用を決定しました。Databricks Serverlessへの移行における最初のステップは何ですか?",
        options: [
            "(A) ソースAPI、ファイル、JDBC/ODBC接続からの取り込みを含むレガシー取り込みパイプライン",
            "(B) 最新のDatabricksランタイムおよびUnityカタログに対応した、頻繁に実行される効率的なPythonベースのデータ変換パイプライン",
            "(C) 最新のDatabricksランタイムおよびUnityカタログと互換性のある、頻繁に実行される効率的なScalaベースのデータ変換パイプライン",
            "(D) 低頻度BIダッシュボードとアドホックSQL分析"
        ],
        answerIndex: 3,
        explanation: "(D) Serverlessアーキテクチャのメリット（即時起動、インフラ管理不要）を最も簡単に享受でき、移行リスクが低いのは Serverless SQL Warehouse を利用したBIダッシュボードやアドホック分析の移行です。まずはここから始めるのがベストプラクティスです。\n(A), (B), (C) 既存の複雑なデータ変換パイプラインやレガシーな取り込み処理のServerless化は、設定や互換性の確認が必要になるため、最初のステップには適していません。"
    },
    {
        question: "問題 4:\nアナリストの報告によると、本日午前9時にデータ修正が適用されるまで、ダッシュボードに誤った数値が表示されていたとのことです。エンジニアは、バージョン118の時点と全く同じテーブルを照会する必要があります。どの文がそのデータを返しますか?",
        options: [
            "(A) SELECT * FROM sales VERSION AS OF 118",
            "(B) DESCRIBE HISTORY sales LIMIT 118",
            "(C) RESTORE TABLE sales TO VERSION AS OF 118",
            "(D) SELECT * FROM sales WHERE _commit_version = 118"
        ],
        answerIndex: 0,
        explanation: "(A) Delta Lakeの「タイムトラベル」機能を使用して特定のバージョンのデータをクエリするための正しいSQL構文です。\n(B) DESCRIBE HISTORY はテーブルのコミット履歴（メタデータ）を返すコマンドであり、過去のデータそのものを返すわけではありません。\n(C) RESTORE TABLE は現在のテーブルを指定のバージョンにロールバック（復元）してしまうコマンドであり、単なる「照会（クエリ）」ではありません。\n(D) Deltaテーブルでは _commit_version という列をWHERE句で直接指定してクエリすることはできません。"
    },
    {
        question: "問題 5:\nSQL を使用して Delta Live Tables (DLT)テーブルを作成するときに、CREATE LIVE TABLE 構文ではなく CREATE STREAMING LIVE TABLE 構文を使用する必要があるのはどれですか。",
        options: [
            "(A) DLT パイプラインの前のステップが静的である場合は、CREATE STREAMING LIVE TABLE を使用する必要があります。",
            "(B) CREATE STREAMING LIVE TABLE はDLT では冗長なので、使用する必要はありません。",
            "(C) データを増分的に処理する必要がある場合は、CREATE STREAMING LIVE TABLE を使用する必要があります。",
            "(D) 複雑な集計を通じてデータを処理する必要がある場合は、CREATE STREAMING LIVE TABLE を使用する必要があります。",
            "(E) DLT パイプラインの後続のステップが静的である場合は、CREATE STREAMING LIVE TABLE を使用する必要があります。"
        ],
        answerIndex: 2,
        explanation: "(C) STREAMING LIVE TABLE（ストリーミングテーブル）は、データソースからの新しいデータのみを継続的かつ「増分的」に処理するために使用されます。毎回全件を再計算するのではなく、差分だけを処理したい場合に必須です。\n(A), (E) パイプラインの前後ステップが静的かどうかは関係ありません。\n(B) 冗長ではなく、ストリーミング・増分処理において必須の構文です。\n(D) 複雑な集計は通常のマテリアライズドビュー（LIVE TABLE）で処理することも可能です。"
    },
    {
        question: "問題 6:\nSpark SQL の配列関数によって提供される利点は次のどれですか?",
        options: [
            "(A) 指定された間隔で時間関連のデータを処理する機能",
            "(B) 手続きの自動化のためにテーブルの配列を操作する機能",
            "(C) JSONファイルから取り込んだ複雑なネストされたデータを扱う機能",
            "(D) 特定のパーティションとウィンドウ内のデータを操作する機能",
            "(E) 一度にさまざまなタイプのデータを処理する機能"
        ],
        answerIndex: 2,
        explanation: "(C) Spark SQLの配列関数（explode, transformなど）は、JSONなどの半構造化データに頻出する配列やネストされた（階層化された）複雑なデータを展開・操作するために非常に有用です。\n(A) 時間関連データには日付・時刻関数を使用します。\n(B) 手続きの自動化は関数自体の目的ではありません。\n(D) パーティションやウィンドウ内の操作はウィンドウ関数の役割です。\n(E) さまざまなデータ型を処理すること自体は、配列関数固有の機能ではありません。"
    },
    {
        question: "問題 7:\nデータエンジニアが、Lakeflowパイプラインをデプロイするために、Databricks Asset Bundles (DABs) を準備しています。パイプラインが正しい環境にデプロイされるようにするには、ホストURLやルートストレージパスなどのワークスペース固有の設定をバンドルプロジェクト内のどこに定義すればよいでしょうか?",
        options: [
            "(A) ローカル開発マシン上のグローバル環境変数",
            "(B) LakeflowパイプラインのPythonソースコード内",
            "(C) databricks.ymlファイルのtargetsセクション",
            "(D) バンドルのルートディレクトリにあるREADME.mdファイル内"
        ],
        answerIndex: 2,
        explanation: "(C) Databricks Asset Bundlesにおいて、開発（dev）や本番（prod）といったデプロイ先のワークスペースごとの固有設定は databricks.yml ファイルの targets セクションに定義するのが正しい仕様です。\n(A) 環境変数を使用することは可能ですが、プロジェクトの構成としてはymlに定義するのがベストプラクティスです。\n(B) ソースコード内に環境固有のURLをハードコーディングすべきではありません。\n(D) README.md は人間が読むドキュメントであり、設定ファイルではありません。"
    },
    {
        question: "問題 8:\nデータエンジニアは、Deltaテーブルに書き込む前に、特定の列に基づいてデータセットから重複レコードを削除したいと考えています。特定の列に基づいて重複行を削除するSpark DataFrameメソッドはどれですか?",
        options: [
            "(A) distinct",
            "(B) unique",
            "(C) dropDuplicates",
            "(D) removeDuplicates"
        ],
        answerIndex: 2,
        explanation: "(C) DataFrameで「特定の列」を指定して重複を削除するメソッドは dropDuplicates() です。\n(A) distinct() は行全体（すべての列が一致する場合）の重複を削除しますが、特定の列を指定することはできません。\n(B), (D) unique や removeDuplicates というメソッドはPySparkのDataFrame APIには存在しません。"
    },
    {
        question: "問題 9:\nメダリオンアーキテクチャにおけるGold層（金層）の特徴となる項目を選びなさい。",
        options: [
            "(A) 歴史的系譜 (Historical lineage)",
            "(B) 生データ (Raw data)",
            "(C) 正規化 (Normalized)",
            "(D) 非正規化 (Denormalized) および 読み取り最適化済み (Read-optimized)"
        ],
        answerIndex: 3,
        explanation: "(D) Gold層は、ビジネスレベルのダッシュボードやBIツールでのレポート向けにデータが高度に集計・洗練された層です。クエリパフォーマンスを向上させるためにデータは「読み取り最適化」され、分析しやすいスタースキーマなどに「非正規化」されるのが一般的です。\n(A) 歴史的系譜やクレンジングの履歴は主にSilver層などで管理されます。\n(B) 生データはそのままBronze層に保存されます。\n(C) 第三正規形などで正規化されたデータは、通常Silver層のエンタープライズデータモデルの特徴です。"
    },
    {
        question: "問題 10:\n重複レコードの書き込みを回避しながら Delta テーブルにデータを書き込むために使用できるコマンドはどれですか。",
        options: [
            "(A) APPEND",
            "(B) DROP",
            "(C) MERGE",
            "(D) INSERT",
            "(E) IGNORE"
        ],
        answerIndex: 2,
        explanation: "(C) ターゲットのDeltaテーブルに対して新しいデータを「アップサート（条件に合致すれば更新、合致しなければ挿入）」し、重複書き込みを回避するための標準コマンドは MERGE INTO コマンドです。\n(A), (D) APPEND や INSERT は単純にデータを追加するため、既存データと重複する可能性があります。\n(B) DROP はテーブルやデータベースを削除するコマンドです。\n(E) IGNORE は特定の挿入モードとして使われることはありますが、重複回避を含めた標準的なデータ更新・挿入には MERGE を使用します。"
    },
    {
        question: "問題 11:\nデータエンジニアリングチームが新しいデータ変換ノートブックを開発しています。開発中は、迅速なテスト、素早いコード変更、容易なデバッグが必要です。その後、ノートブックは人間の介入なしにスケジュールされたジョブとして毎晩実行されます。開発速度を最適化したいと考えています。開発中はどのコンピューティングリソースを使用すべきでしょうか?",
        options: [
            "(A) インスタンスプールを使用する",
            "(B) 従来のジョブコンピューティング (Job Compute) を使用する",
            "(C) All-Purposeコンピューティング (旧: 対話型クラスター) を使用する",
            "(D) SQLウェアハウスを使用する"
        ],
        answerIndex: 2,
        explanation: "(C) ノートブック開発中の迅速なテストやデバッグには、コードを対話的（インタラクティブ）に実行できる「All-Purpose compute（汎用コンピュート）」が最適です。\n(B) 「ジョブコンピューティング」は本番環境のスケジュール実行には適していますが、起動のたびに作成されるため開発時の試行錯誤には不向きです。\n(A), (D) プールやSQLウェアハウスは、今回のノートブック開発の要件（素早いコード変更やデバッグ）の最適解ではありません。"
    },
    {
        question: "問題 12:\nメダリオンアーキテクチャにおける Silverテーブルと Bronzeテーブルの関係に関する次の記述のうち、常に正しいものはどれですか。",
        options: [
            "(A) Silverテーブルには、Bronzeデータよりも洗練されておらず、クリーンでないデータのビューが含まれています。",
            "(B) Silverテーブルには集計が含まれますが、Bronzeデータは集計されません。",
            "(C) SilverテーブルにはBronzeテーブルよりも多くのデータが含まれています。",
            "(D) SilverテーブルにはBronzeテーブルよりも少ないデータが含まれます。",
            "(E) Silverテーブルには、Bronzeテーブルよりも洗練された、よりクリーンなデータビューが含まれます。"
        ],
        answerIndex: 4,
        explanation: "(E) メダリオンアーキテクチャにおいて、Silver層はBronze層（生データ）をフィルタリング、クレンジング、および強化した「クリーンなデータ」を保持する層です。\n(A) Bronzeよりも洗練されていないというのは逆です。\n(B) 高度な集計（ビジネス要件に合わせた集計）は通常Gold層で行われます。\n(C), (D) データ量（行数）の増減はクレンジングの内容に依存するため、「常に正しい」わけではありません。"
    },
    {
        question: "問題 13:\nテーブルを作成するために使用されるデータ定義言語 (DDL) 操作を正しく示すSQLコードスニペットはどれですか?",
        options: [
            "(A) CREATE TABLE employees (id INT, name STRING);",
            "(B) DROP TABLE employees;",
            "(C) ALTER TABLE employees ADD COLUMN salary DECIMAL(10,2);",
            "(D) INSERT INTO employees (id, name) VALUES (1, 'Alice');"
        ],
        answerIndex: 0,
        explanation: "(A) 「テーブルを作成する」DDL文は CREATE TABLE です。\n(B) DROP はテーブルを削除するDDLです。\n(C) ALTER はテーブル定義を変更するDDLです。\n(D) INSERT はデータを操作・追加するためのデータ操作言語（DML）です。"
    },
    {
        question: "問題 14:\nDatabricks Asset Bundles (DABs) の構成ファイルとして有効なフォーマットはどれですか?",
        options: [
            "(A) YAML形式 (例: resources: jobs: ...)",
            "(B) JSON形式 (例: {\"resources\": ...})",
            "(C) Python辞書形式 (例: configuration = ...)",
            "(D) HCL (HashiCorp Configuration Language) 形式"
        ],
        answerIndex: 0,
        explanation: "(A) Databricks Asset Bundles (DABs) の主要な設定ファイル（databricks.yml）は YAML フォーマットで記述されます。Terraform (HCL) の概念に似ていますが、DABs 自体は YAML を使用してリソースを定義します。"
    },
    {
        question: "問題 15:\nデータエンジニアが、データクレンジング用のノートブックタスクとサマリーレポート生成用のSQLクエリタスクを含むDatabricksジョブを設計しています。サマリーレポートは、クレンジングタスクが正常に完了した後にのみ実行される必要があります。Databricksジョブのタスクグラフでは、依存関係をどのように構成すればよいでしょうか?",
        options: [
            "(A) サマリーレポートタスクの構成で、「Depends on (依存先)」としてクレンジングタスクを選択する。",
            "(B) 両方のタスクを同じスケジュールで実行するように設定し、レポートの開始には5分間の遅延を設ける。",
            "(C) クレンジングタスクを構成して、「Run on failure (失敗時に実行)」トリガーを使用してサマリーレポートを開始する。",
            "(D) 両方のタスクを同じノートブックに配置し、標準の Python 関数呼び出しを使用する。"
        ],
        answerIndex: 0,
        explanation: "(A) Databricksのジョブタスク機能では、後続のタスクの設定画面で「Depends on（依存先）」を指定することで、前のタスクが正常完了した後に実行する依存関係を正しく構築できます。\n(B) 時間差による制御は、処理時間の変動によって失敗するリスクがあるためアンチパターンです。\n(C) 正常完了後ではなく失敗時のトリガーになってしまいます。\n(D) ノートブックを統合すると、タスクごとのリソース分離やリトライ制御といったDatabricks Jobsの利点を活かせなくなります。"
    },
    {
        question: "問題 16:\nデータエンジニアリングチームは、customer_id、amount、categoryという列を持つtransactionsという名前のPySpark DataFrameを使用して顧客取引を分析しています。チームは効率化のため、顧客ごとに取引総額、平均取引額、最大取引額をすべて1回の操作で計算する必要があります。PySparkでこれを実現するには、どのコード断片を使用すればよいでしょうか?",
        options: [
            "(A) transactions.groupBy(\"customer_id\").agg(sum(\"amount\"), avg(\"amount\"), max(\"amount\"))",
            "(B) transactions.groupBy(\"customer_id\").select(sum(\"amount\"), avg(\"amount\"), max(\"amount\"))",
            "(C) transactions.agg(groupBy(\"customer_id\"), sum(\"amount\"), avg(\"amount\"), max(\"amount\"))",
            "(D) transactions.groupBy(\"customer_id\").sum(\"amount\").avg(\"amount\").max(\"amount\")"
        ],
        answerIndex: 0,
        explanation: "(A) PySparkでグループ化されたデータに対して複数の集計関数を一度に適用する場合、groupBy() に続けて agg() メソッドを使用するのが正しい構文です。\n(B) groupBy() の後に select() は直接使用できません。\n(C), (D) これらはPySparkの構文として正しく機能しません。"
    },
    {
        question: "問題 17:\nデータエンジニアは、注文を一度も行ったことのない顧客をすべて見つける必要があります。顧客テーブルには customer_id などの属性が含まれており、注文テーブルには order_id や customer_id などの属性が含まれています。両方のテーブルは customer_id を結合キーとして共有しています。結果には注文関連の列を含めず、顧客列のみを含める必要があります。この要件を最も効率的かつ正確に満たす結合方法はどれですか?",
        options: [
            "(A) 内部結合 (Inner Join) を行い、その後 order_id が NULL のものをフィルタリングする。",
            "(B) 顧客テーブルから注文テーブルへの左アンチ結合 (Left Anti Join) を行う。",
            "(C) 注文テーブルから顧客テーブルへの左外部結合 (Left Outer Join) を行う。",
            "(D) 完全外部結合 (Full Outer Join) を行い、order_id が NULL の条件でフィルタリングする。"
        ],
        answerIndex: 1,
        explanation: "(B) 左アンチ結合 (Left Anti Join) は、右側のテーブル（注文テーブル）に一致するレコードが「存在しない」左側のテーブル（顧客テーブル）のレコードのみを返し、かつ右側の列は結果に含まれません。今回の要件に完璧に合致します。\n(A) 内部結合では一致するレコードしか残らないため、そもそも注文していない顧客は消えてしまいます。\n(C), (D) 外部結合を行ってからNULLでフィルタリングすることも可能ですが、余分な列が含まれたり、計算コストが無駄に高くなったりするため最適ではありません。"
    },
    {
        question: "問題 18:\nデータエンジニアがDatabricks上でSpark SQLジョブを実行中に、小さなルックアップテーブルと大きなファクトテーブル間の結合が遅いことに気づきました。結合を高速化するために、Sparkが小さなルックアップテーブルをすべてのエグゼキュータに自動的にブロードキャストするようにしたいと考えています。データエンジニアはどの構成パラメータを調整すべきでしょうか?",
        options: [
            "(A) spark.sql.shuffle.partitions",
            "(B) spark.executor.memory",
            "(C) spark.sql.autoBroadcastJoinThreshold",
            "(D) spark.default.parallelism"
        ],
        answerIndex: 2,
        explanation: "(C) spark.sql.autoBroadcastJoinThreshold は、テーブルをすべてのワーカーノードにブロードキャスト（コピーして共有）するかどうかを判定するサイズのしきい値（デフォルトは10MB）を設定するパラメータです。この値を増やすことで、より大きなテーブルでもブロードキャスト結合が強制され、シャッフルを回避して高速化できます。\n(A) はシャッフル時のパーティション数を調整するものです。\n(B), (D) はメモリや並列度の基本設定であり、ブロードキャスト結合を直接制御するものではありません。"
    },
    {
        question: "問題 19:\nDatabricksにおけるAuto Loaderの機能として正しい説明はどれですか?",
        options: [
            "(A) Auto Loaderはクラウドストレージから新しいファイルを自動的に取り込み、処理します。バッチデータとストリーミングデータの両方を処理し、スキーマの進化 (Schema Evolution) をサポートします。",
            "(B) Auto Loaderはクラウドストレージから新しいファイルを自動的に取り込み、処理します。バッチデータとストリーミングデータを処理しますが、スキーマの進化はサポートしていません。",
            "(C) Auto Loaderはクラウドストレージから新しいファイルを自動的に取り込み、処理しますが、スキーマの進化はサポートせず、ストリーミングデータのみを処理します。",
            "(D) Auto Loaderはクラウドストレージから新しいファイルを自動的に取り込み、処理し、スキーマの進化をサポートしてバッチデータのみを処理します。"
        ],
        answerIndex: 0,
        explanation: "(A) Auto Loader (cloudFiles) は、クラウドストレージに到着した新規ファイルをインクリメンタル（増分的）に効率よく取り込む機能です。ストリーミング（Structured Streaming）の文脈で利用されますが、Trigger.AvailableNow を使ってバッチジョブとして実行することも可能です。また、データ構造の変更を検知する「スキーマ推論とスキーマの進化（Schema Evolution）」を強力にサポートしています。"
    },
    {
        question: "問題 20:\nパイプラインでは、COPY INTOコマンドを使用して、クラウドオブジェクトストレージからCSVファイルをUnity CatalogのDeltaテーブルに取り込みます。一部のファイルは、同じファイル名を使用して修正を加えて再アップロードされることがあります。エンジニアは、修正されたデータが生成されたらすぐに取り込まれるようにする必要があります。エンジニアは何をすべきでしょうか?",
        options: [
            "(A) 実行ごとにソースパスからすべてのファイルを再読み込みする。",
            "(B) 修正内容を新規ファイル（異なるファイル名）としてアップロードして読み込み、ターゲットテーブルに更新を適用する。",
            "(C) 各実行前にターゲットテーブルを再作成する。",
            "(D) 実行ごとにターゲットDeltaテーブルを上書きする。"
        ],
        answerIndex: 1,
        explanation: "(B) COPY INTO コマンドは状態を記録しており、デフォルトでは「すでに読み込み済みのファイル（同じファイル名）」は無視します。修正データを確実に反映させるためのベストプラクティスは、修正されたデータを「新しいファイル」としてクラウドストレージに配置し、CDC（変更データキャプチャ）や MERGE 文と組み合わせてターゲットテーブルを適切に更新することです。\n(A) force = true オプションで全件再読み込みも可能ですが、データ量が増えると非常に非効率で現実的ではありません。"
    },
    {
        question: "問題 21:\nデータエンジニアリングチームは、Kafkaを使用してイベントデータをキャプチャし、Databricksに取り込んでいます。チームはこれらのイベント履歴を確認したいと考えています。Medallionアーキテクチャは既に導入されています。チームはストレージコストに配慮したいと考えています。この履歴イベントデータはどこに保存すればよいでしょうか?",
        options: [
            "(A) Goldレイヤー",
            "(B) Silverレイヤー",
            "(C) Bronzeレイヤー",
            "(D) 生レイヤー (外部ストレージ)"
        ],
        answerIndex: 2,
        explanation: "(C) メダリオンアーキテクチャにおいて、Kafkaなどから取り込んだ変更を加えない「生の履歴データ（Raw data）」は Bronze層 に保存するのが標準的なプラクティスです。Delta Lakeを利用してBronze層に圧縮して保存することで、コストを抑えつつ後から何度でもデータを再処理・確認できる状態を維持できます。"
    },
    {
        question: "問題 21:\nデータエンジニアは、別のデータセットのキーに一致するデータに基づいて、Deltaテーブルの特定の行を更新したいと考えています。この操作では、挿入と更新の両方のロジックを単一のステートメントでサポートする必要があります。\nDelta Lakeのどのコマンドがこの機能をサポートしていますか?",
        options: [
            "(A) DELETE",
            "(B) INSERT",
            "(C) UPDATE",
            "(D) MERGE INTO"
        ],
        answerIndex: 3,
        explanation: "(D) MERGE INTO コマンドは、一致する条件に基づいて既存の行を更新（UPDATE）し、一致しない場合に新しい行を挿入（INSERT）する「アップサート」処理を単一のステートメントで実行できます。\n(A), (B), (C) これらは単一の操作（削除のみ、挿入のみ、更新のみ）しか実行できず、両方のロジックを同時にはサポートしません。"
    },
    {
        question: "問題 22:\nデータエンジニアに、product列とrevenue列を持つdfというPySparkデータフレームが提供されています。データエンジニアは、各商品の総収益、平均収益、およびトランザクション数を算出するために、複雑な集計を行う必要があります。\nデータエンジニアはどのコードスニペットを使用すべきでしょうか?",
        options: [
            "(A) \nfrom pyspark.sql import functions as F\naggregated_df = df.groupBy(\"product\").agg(F.sum(\"revenue\").alias(\"total_revenue\"), F.avg(\"revenue\").alias(\"avg_revenue\"), F.count(\"*\").alias(\"transaction_count\"))",
            "(B) \naggregated_df = df.groupBy(\"product\").agg(\"sum(revenue)\", \"avg(revenue)\", \"count(revenue)\")",
            "(C) \nfrom pyspark.sql import functions as F\naggregated_df = df.select(\"product\", \"revenue\").groupBy(\"product\").agg(F.sum(\"revenue\"), F.mean(\"revenue\"))",
            "(D) \naggregated_df = df.groupBy(\"product\").agg({\"revenue\": \"sum\", \"revenue\": \"avg\", \"revenue\": \"count\"})"
        ],
        answerIndex: 0,
        explanation: "(A) pyspark.sql.functions を使用して、groupBy と agg の中で複数の集計関数を列挙し、alias でカラム名を付けるのが正しく推奨されるPySpark構文です。\n(B) このような文字列ベースでの直接指定はPySparkの agg では正しく動作しません。\n(C) count が不足しており、要件（トランザクション数の算出）を満たしていません。\n(D) 辞書型（Dict）を agg に渡すことは可能ですが、Pythonの辞書の仕様上、同じキー（\"revenue\"）を複数指定すると最後の値で上書きされてしまうため、同時に3つの集計を計算することはできません。"
    },
    {
        question: "問題 23:\nデータエンジニアリングチームは、Databricksワークスペース内で大規模な集計処理がサーバーレスコンピューティングで実行されることを確認しながら、新しいデータ取り込みパイプラインをローカルで検証したいと考えています。彼らはDatabricks Connectを使用する予定で、共有クラスターまたはサーバーレスのいずれかに接続するオプションがあります。\n接続障害を回避するために、最初に確認すべきワークスペースの要件はどれですか?",
        options: [
            "(A) ワークスペースでUnity Catalogが無効になっていること、およびDatabricks Connectのバージョンがサーバーレスランタイムのバージョンより低いことを確認する。",
            "(B) ワークスペースでUnity Catalogが有効になっていること、およびDatabricks Connectのバージョンが対象のランタイムリリースでサーバーレスをサポートしていることを確認する。",
            "(C) Databricks Connectではサーバーレスがサポートされていないため、割り当てられたアクセスモードのクラスターのみが使用されていることを確認する。",
            "(D) Spark Connectのパリティを満たすために、ローカルのSparkバージョンがサーバーレスのSparkバージョンと等しいことを確認する。"
        ],
        answerIndex: 1,
        explanation: "(B) Databricks Connect（V2以降）を使用してサーバーレスコンピューティングに接続する場合、ワークスペースでUnity Catalogが有効になっていること、およびクライアントのDatabricks Connectバージョンが対象のDatabricks Runtimeバージョンと一致（互換性があること）していることが必須条件です。\n(A) Unity Catalogは無効ではなく有効である必要があります。\n(C) Databricks Connect V2はサーバーレスコンピューティングをサポートしています。\n(D) パリティ要件を満たすために重要なのはDatabricks Connectのバージョンの一致であり、ローカルのオープンソースSparkバージョンではありません。"
    },
    {
        question: "問題 24:\nデータエンジニアは、前チームからDatabricksパイプラインを引き継ぎました。このパイプラインはSLAを満たしておらず、初期調査の結果、Sparkでディスクへのスピル（メモリ不足）が発生していることが判明しました。実行時間の増加はコスト増にもつながっています。データエンジニアは、コストを大幅に増加させることなく実行時間を短縮する必要があります。この問題に対処するために、データエンジニアはまず何をすべきでしょうか?",
        options: [
            "(A) spark.sql.shuffle.partitions の設定を調整する。",
            "(B) 要件に合わせてクラスターのオートスケーリングを有効にする。",
            "(C) Photon対応の実行エンジンを使用する。",
            "(D) クラスターがメモリ最適化ノードタイプを使用していることを確認する。"
        ],
        answerIndex: 0,
        explanation: "(A) データがメモリに収まらずディスクに溢れる（スピルする）場合、コストをかけずに最初に行うべき最適な対処は spark.sql.shuffle.partitions の数を増やすことです。これにより、シャッフルされるデータの1パーティションあたりのサイズが小さくなり、エグゼキュータのメモリに収まるようになります。\n(B), (C), (D) オートスケーリングの有効化、Photonの利用、メモリ最適化ノード（高価なインスタンス）への変更は、いずれも追加のコンピュートコストが発生するため、「コストを大幅に増加させることなく」という要件に反します。"
    },
    {
        question: "問題 26:\nデータエンジニアは、一度限りのスキーマ実験のために、本番環境のDeltaテーブルのコピーを作成する必要があります。このコピーは完全に独立している必要があり、ソーステーブルに対する後続のVACUUM操作によって無効化されないようにする必要があります。\nどのコマンドを使用すべきですか?",
        options: [
            "(A) CREATE TABLE test_orders SHALLOW CLONE prod_orders",
            "(B) CREATE TABLE test_orders DEEP CLONE prod_orders",
            "(C) CREATE VIEW test_orders AS SELECT * FROM prod_orders",
            "(D) CREATE TABLE test_orders LIKE prod_orders"
        ],
        answerIndex: 1,
        explanation: "(B) DEEP CLONE は、メタデータだけでなく実データもコピーするため、元のテーブルが VACUUM でファイルを物理削除されても影響を受けない完全に独立したコピーを作成します。\n(A) SHALLOW CLONE は実データをコピーせず元ファイルを参照するため、元テーブルで VACUUM が実行されると実験用テーブルが壊れてしまいます。\n(C) VIEW は単なるクエリの保存であり、実データを保持しません。\n(D) LIKE はスキーマのみをコピーし、データはコピーしません。"
    },
    {
        question: "問題 27:\nPythonファイルは本番環境への導入準備が整っており、クライアントは最も効率的かつコスト効率の良いクラスター構成を希望しています。処理するデータ量はわずか10GBで、単純な結合処理のみを行い、複雑な集計処理や大規模な変換処理は行いません。\nどのクラスターが要件を満たしていますか?",
        options: [
            "(A) スポットインスタンスが有効になっているジョブクラスター (Job Cluster)",
            "(B) Photonが有効なジョブクラスター",
            "(C) スポットインスタンスが無効になっているジョブクラスター",
            "(D) All-Purposeクラスター (Interactive Cluster)"
        ],
        answerIndex: 0,
        explanation: "(A) 本番環境の自動化ジョブには、Interactive（All-Purpose）クラスターよりも単価が大幅に安いジョブクラスターを使用するのがベストプラクティスです。さらに要件が「単純な処理」で「コスト効率最優先」であるため、スポットインスタンス（クラウドの余剰リソースを安価に利用）を有効にすることで最もコストを抑えられます。\n(B) Photonは高速ですが追加コストがかかるため、単純な10GBの処理にはオーバースペックです。\n(C) スポットインスタンスを無効にするとオンデマンド料金となりコストが上がります。\n(D) Interactiveクラスターは開発用であり、ジョブクラスターより非常に高価です。"
    },
    {
        question: "問題 28:\nDelta Live Tablesを使用してデータセットが定義されており、期待値句が含まれています。\nCONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION FAIL UPDATE\nこれらの制約に違反するデータを含むデータバッチが処理された場合、どのような動作が想定されますか?",
        options: [
            "(A) 期待値に違反するレコードは、対象データセットから削除され、隔離テーブルにロードされます。",
            "(B) 期待値に違反するレコードは、ターゲットデータセットに追加され、イベントログに無効として記録されます。",
            "(C) 期待値に違反するレコードは、対象データセットに追加され、対象データセットに追加されたフィールドで無効としてフラグが付けられます。",
            "(D) 期待値に違反するレコードは、対象データセットから削除され、イベントログに無効として記録されます。",
            "(E) 期待値に違反する記録があると、ジョブ（パイプラインの更新）が失敗します。"
        ],
        answerIndex: 4,
        explanation: "(E) DLTの品質制約（Expectation）において ON VIOLATION FAIL UPDATE が設定されている場合、制約に1件でも違反するレコードが存在すると、パイプラインの更新処理自体がただちに「失敗（Fail）」し、停止します。\n(B), (C) 違反レコードを許容するのはデフォルトの EXPECT 句のみの場合です。\n(A), (D) 違反レコードをスキップ（削除）するのは ON VIOLATION DROP ROW の場合です。"
    },
    {
        question: "問題 29:\nデータエンジニアは、既存のデータを保持したまま、既存のDeltaテーブルに新しいレコードを追加する必要があります。データ取り込みパイプラインは1時間ごとに実行され、以前のレコードを置き換えることなく増分データを追加します。どの書き込みモードを使用すべきでしょうか?",
        options: [
            "(A) Append (追加)",
            "(B) Overwrite (上書き)",
            "(C) ErrorIfExists (エラーが存在する場合)",
            "(D) Ignore (無視)"
        ],
        answerIndex: 0,
        explanation: "(A) 既存のデータを保持したまま、パイプラインから新しいデータをどんどん追加（増分追加）していくための正しい書き込みモードは Append です。\n(B) Overwrite を使用すると過去のレコードがすべて消去・置換されてしまいます。\n(C) ErrorIfExists はテーブルが既に存在する場合に処理を失敗させます。\n(D) Ignore はテーブルが存在する場合に書き込み自体をスキップします。"
    },
    {
        question: "問題 30:\nDatabricksのSQL述語のうち、両方の値がNULLの場合、または両方の値がNULL以外の等しい場合に、行が正しく一致するように、NULL安全な等価比較を実行するものはどれですか?",
        options: [
            "(A) WHERE customer_id <=> :cid",
            "(B) WHERE customer_id = :cid",
            "(C) WHERE COALESCE(customer_id, '') = COALESCE(:cid, '')",
            "(D) WHERE customer_id != :cid OR customer_id IS NULL"
        ],
        answerIndex: 0,
        explanation: "(A) Spark SQLにおいて <=> は「Nullセーフ等価演算子 (Null-safe equal)」です。通常の = 演算子では NULL = NULL は NULL (False扱い) になってしまいますが、<=> を使用すると両方がNULLの場合に True を返します。\n(C) COALESCEで代用する方法は非効率であり、元のデータに空文字とNULLが混在している場合に誤った比較を引き起こす可能性があります。"
    },
    {
        question: "問題 31:\nAuto Loaderがデータを増分的（段階的）に処理する際の基盤として使用する技術（エンジン）は次のどれですか?",
        options: [
            "(A) データエクスプローラー",
            "(B) チェックポイント",
            "(C) Databricks SQL",
            "(D) Unity Catalog",
            "(E) Spark Structured Streaming (Spark構造化ストリーミング)"
        ],
        answerIndex: 4,
        explanation: "(E) Auto Loaderは、バックグラウンドで「Spark Structured Streaming」のエンジンを使用して、クラウドストレージに到着した新しいファイルを増分的かつ継続的に処理します。\n(B) チェックポイントはストリーミング処理の進行状況を記録する仕組みですが、処理エンジンそのものではありません。"
    },
    {
        question: "問題 32:\nデータエンジニアが、5000万行を含む大規模なDataFrameに対して df.toPandas() を実行しました。ノートブックのセルは、ドライバで java.lang.OutOfMemoryError が発生して失敗しました。この失敗の直接的な原因となっているメモリ構成はどれですか?",
        options: [
            "(A) spark.memory.fraction が低すぎるため、キャッシュに使用できるストレージメモリが制限されている。",
            "(B) spark.executor.memory が不足しているため、DataFrameの変換処理ができない。",
            "(C) spark.sql.shuffle.partitions の値が高すぎるため、シャッフル中にメモリを過剰に消費している。",
            "(D) spark.driver.memory が少なすぎて、収集された結果セットを保持できない。"
        ],
        answerIndex: 3,
        explanation: "(D) toPandas() メソッドは、分散処理されているDataFrameの全データを単一のドライバーノードに収集（Collect）してPandas DataFrameに変換します。5000万行の大規模データがドライバーのメモリ（spark.driver.memory）に収まりきらなかったことが直接の原因です。\n(A), (B), (C) これらはエグゼキュータ側の処理やシャッフルに関する設定であり、ドライバーのメモリ不足によるエラーには直接関係ありません。"
    },
    {
        question: "問題 33:\nデータエンジニアが、地域別に売上データをグループ化し、各地域の総収益を計算するSparkコードを作成しています。グループ化操作を実行するSpark DataFrame変換メソッドはどれですか?",
        options: [
            "(A) groupBy",
            "(B) orderBy",
            "(C) select",
            "(D) filter"
        ],
        answerIndex: 0,
        explanation: "(A) 特定の列（地域など）に基づいてデータをグループ化し、集計操作を行うための正しいPySparkメソッドは groupBy です。\n(B) データの並べ替えに使用します。\n(C) 列の選択に使用します。\n(D) 条件による行の絞り込みに使用します。"
    },
    {
        question: "問題 34:\nノートブックタスク check_volume は、1日のデータ量を計算し、 record_count という名前のタスク値 (Task Value) に書き込みます。カウントが100万を超える場合は high_volume_pipeline を実行し、そうでない場合は normal_pipeline を実行する必要があります。Databricks Jobsにおいて、どの制御フロー機能を使用すべきでしょうか?",
        options: [
            "(A) record_count タスクの値を読み取って、異なる下流タスクにルーティングする If/else 条件タスクを追加する。",
            "(B) レコード数を超える For Each タスクを使用し、しきい値を下回ったら停止する。",
            "(C) カウントがしきい値を超えるまで、 check_volume の追加リトライを設定する。",
            "(D) タスクの状態（成功・失敗など）のみに基づいて実行条件を設定する。"
        ],
        answerIndex: 0,
        explanation: "(A) Databricks Jobsには「If/else条件タスク」が存在し、前段のタスクが出力したTask Value（この場合は record_count）の値を評価して、後続のタスクの実行を動的に分岐させることができます。\n(D) タスクの成功/失敗という状態だけでは、100万という数値の閾値判定はできません。"
    },
    {
        question: "問題 35:\nジョブが失敗した場合に Databricks ジョブの所有者に電子メールを送信するには、次のどの方法を使用する必要がありますか?",
        options: [
            "(A) ジョブが失敗した場合にジョブ所有者に通知する方法はない。",
            "(B) ノートブックの各セルにアラートシステムを手動でプログラミングする。",
            "(C) ジョブ設定のUI (ジョブページ) でアラート (メール通知) を設定する。",
            "(D) ノートブック内でアラートを設定する。",
            "(E) MLflow モデルレジストリWebhookを使用する。"
        ],
        answerIndex: 2,
        explanation: "(C) Databricks JobsのUI（ジョブページ）には、ジョブの開始、成功、または失敗時に指定したメールアドレスやWebhook（Slackなど）に通知を送る機能が標準で備わっています。\n(B), (D) コード内で手動で実装する必要はありません。"
    },
    {
        question: "問題 36:\nデータアナリストが、データ分析チーム全体で使用するDeltaテーブル sales を作成しました。データエンジニアリングチームに協力を求め、データのクリーン性を確認するための一連のテストを実施したいと考えていますが、データエンジニアリングチームはテストにSQLではなくPython (PySpark) を使用しています。\nデータエンジニアリングチームがPySparkで sales テーブルのデータにアクセスしてDataFrameを作成するために使用できるコマンドはどれですか?",
        options: [
            "(A) SELECT * FROM sales",
            "(B) PySpark とSQL間でデータを共有する方法はない。",
            "(C) spark.table(\"sales\")",
            "(D) spark.sql(\"sales\")",
            "(E) spark.delta.table(\"sales\")"
        ],
        answerIndex: 2,
        explanation: "(C) PySparkにおいて、カタログに登録されているテーブルを直接DataFrameとして読み込む正しいコマンドは spark.table(\"テーブル名\") です。\n(A) は純粋なSQL構文であり、Pythonコードとしては実行できません。\n(D) spark.sql(\"SELECT * FROM sales\") であれば正しいですが、spark.sql(\"sales\") は構文エラーになります。"
    },
    {
        question: "問題 37:\nあるチームがDatabricksワークスペースを使用しており、JSONファイルが到着するたびに継続的に取り込む必要があります。どのコードスニペットが有効な Auto Loader のソース構成を示していますか?",
        options: [
            "(A) \nspark.readStream.format(\"json\")\n.option(\"cloudFiles.format\", \"json\")\n.load(\"<path>\")",
            "(B) \nspark.readStream.format(\"cloudFiles\")\n.option(\"cloudFiles.format\", \"json\")\n.load(\"jdbc:sqlserver://;database=\")",
            "(C) \nspark.readStream.format(\"cloudFiles\")\n.option(\"format\", \"json\")\n.load(\"<path>\")",
            "(D) \nspark.readStream.format(\"cloudFiles\")\n.option(\"cloudFiles.format\", \"json\")\n.load(\"<path>\")"
        ],
        answerIndex: 3,
        explanation: "(D) Auto Loaderを起動するための正しい構文は、全体のフォーマットに format(\"cloudFiles\") を指定し、読み込む実際のファイル形式をオプション .option(\"cloudFiles.format\", \"json\") で指定して、対象のストレージパスを .load(\"<path>\") に渡す記述です。\n(A) format(\"json\") と指定すると標準の構造化ストリーミングとなり、Auto Loaderの機能が有効になりません。\n(B) ロード先がJDBCになっていますが、Auto Loaderはクラウドストレージからのファイル読み込みに使用します。"
    },
    {
        question: "問題 38:\nデータエンジニアは、 stores テーブルの配列列 employees において、経験年数が5年を超える従業員を識別するためのカスタムロジックを適用する必要があります。このカスタムロジックでは、各行に対して経験年数が5年を超えるすべての従業員の配列である新しい列 exp_employees を作成する必要があります。このカスタムロジックを大規模に適用するために、データエンジニアは FILTER という高階関数を使用したいと考えています。\n以下のコードブロックのうち、このタスクを正常に完了できるのはどれですか?",
        options: [
            "(A) \nSELECT store_id, employees,\nCASE WHEN employees.years_exp > 5 THEN employees ELSE NULL END AS exp_employees\nFROM stores;",
            "(B) \nSELECT store_id, employees,\nFILTER (employees, years_exp > 5) AS exp_employees\nFROM stores;",
            "(C) \nSELECT store_id, employees,\nFILTER (employees, i -> i.years_exp > 5) AS exp_employees\nFROM stores;",
            "(D) \nSELECT store_id, employees,\nFILTER (exp_employees, i.years_exp > 5) AS exp_employees\nFROM stores;"
        ],
        answerIndex: 2,
        explanation: "(C) Spark SQLの高階関数 FILTER は、配列の各要素を反復処理するためのラムダ関数（匿名関数）の構文 `変数 -> 条件` を必要とします。FILTER(配列カラム, i -> i.プロパティ > 5) が正しい構文です。\n(A) 配列の各要素を展開せずにCASE文で処理することはできません。\n(B) ラムダ関数の変数の指定がないためエラーになります。\n(D) 第1引数に対象となる既存の配列カラム（employees）ではなく、新しいカラム名を入れてしまっています。"
    },
    {
        question: "問題 39:\nデータエンジニアは、データ品質の問題をデバッグするために、Deltaテーブルの過去のバージョンを分析したいと考えています。エンジニアは、2日前の状態のテーブルをクエリする必要があります。Delta Lakeのどの機能を使用すると、テーブルの古いスナップショットをクエリできますか?",
        options: [
            "(A) タイムトラベル (Time Travel)",
            "(B) Z-Order",
            "(C) OPTIMIZE (最適化)",
            "(D) VACUUM (真空)"
        ],
        answerIndex: 0,
        explanation: "(A) Delta Lakeの「タイムトラベル」機能を使用すると、トランザクションログに記録された履歴を利用して、過去の特定のバージョンやタイムスタンプ（例：2日前）のデータを直接クエリすることができます。\n(B), (C) これらはファイルサイズや検索パフォーマンスを最適化するための機能です。\n(D) VACUUM は不要な古い履歴ファイルを削除するコマンドであり、むしろタイムトラベルできる期間を制限する役割を持ちます。"
    },
    {
        question: "問題 40:\nデータエンジニアは、SalesforceからJSON形式の変更データを、ローコードかつフルマネージドな環境でUnity Catalogで管理されるDeltaテーブルに取り込む必要があります。このデータエンジニアは、Databricksのどの機能を使用すべきでしょうか?",
        options: [
            "(A) Unity CatalogのDeltaテーブルに書き込む、Lakeflow Connectの管理型Salesforceコネクタ",
            "(B) PySparkノートブックでSalesforce REST APIを使用して変更されたレコードをクエリし、Deltaテーブルに書き込む",
            "(C) SalesforceがエクスポートしたS3バケットからJSONファイルを読み込むAuto Loader",
            "(D) DBFS上のファイル到着をトリガーとするAuto Loader"
        ],
        answerIndex: 0,
        explanation: "(A) Databricksの「Lakeflow Connect（旧: Ingestion）」は、SalesforceやServiceNowなどのエンタープライズアプリケーションから、ローコードかつフルマネージドでUnity Catalogに直接データを取り込む機能を提供しています。要件（ローコード・フルマネージド・Salesforceから直接）に最も合致する最適なソリューションです。\n(B) REST APIをPySparkで実装するのは「ローコード」ではありません。\n(C) S3からAuto Loaderで読むことは可能ですが、Salesforce側からのエクスポートパイプラインを別途構築する必要があり、フルマネージドな直接連携の要件からは外れます。"
    },
    {
        question: "問題 41:\nデータエンジニアが、異なる部門のチームが共有データにアクセスする必要がある複数チームプロジェクト向けに、Delta Sharing (デルタ共有) を設定しています。データエンジニアはUnity Catalogメタストアの作成に成功し、現在Delta Sharingの設定を行っています。目標は、内部チームが共有データに完全なアクセス権限でアクセスできるようにする一方で、外部パートナーはデータを読み取ることのみを許可することです。データエンジニアは、共有を正しく設定するためにどのような操作を行うべきでしょうか?",
        options: [
            "(A) Delta Shareを作成し、社内チームと外部パートナー向けに安全なアクセスURLを設定し、そのURLを配布して共有データへのアクセスを提供します。",
            "(B) Delta Shareを作成し、内部チームのテーブルとビューを追加し、外部パートナーと内部チームの両方に読み取り/書き込み権限を割り当てます。",
            "(C) Delta Shareを通じて外部パートナーにREAD権限を、内部チームにREAD/WRITE権限を割り当て、正しいテーブルとビューが共有されていることを確認します。",
            "(D) Delta Shareを通じて、外部パートナーには読み取り権限を、内部チームには読み取り/書き込み権限を付与します。"
        ],
        answerIndex: 2,
        explanation: "※この問題の選択肢は実際のDatabricksの仕様と矛盾を含んでいます。\nDelta Sharingは「外部組織への安全なデータ共有（読み取り専用）」を目的としたプロトコルであり、Delta Shareを通じて「書き込み（WRITE）権限」を付与することはできません。内部チームに書き込み権限を付与するには、Delta SharingではなくUnity Catalogの標準機能（GRANT SELECT, MODIFY ON ...）を使用するのが正しいアーキテクチャです。試験問題として(C)や(D)が正解とされている場合がありますが、実務上は「外部パートナーにはDelta SharingでREADを許可し、内部チームにはUnity Catalogで権限を付与する」が正しいアプローチです。"
    },
    {
        question: "問題 42:\nデータエンジニアが、受信するJSONファイル内のスキーマ変更を自動的に検出し、それに応じてターゲットのDeltaテーブルを進化させるデータ取り込みパイプラインを実装しています。この自動スキーマ進化をサポートする機能はどれですか?",
        options: [
            "(A) スキーマの強制 (Schema Enforcement)",
            "(B) ブロードキャスト結合 (Broadcast Join)",
            "(C) スキーマの進化 (Schema Evolution)",
            "(D) パーティションプルーニング (Partition Pruning)"
        ],
        answerIndex: 2,
        explanation: "(C) Auto Loaderなどを使用して新しい列が追加された際に、テーブルのスキーマを自動的に更新してデータを取り込む機能を「スキーマの進化 (Schema Evolution)」と呼びます。\n(A) スキーマの強制は、逆にスキーマに一致しないデータを拒否する機能です。\n(B) 結合アルゴリズムであり無関係です。\n(D) クエリ実行時に不要なパーティションを読み飛ばすパフォーマンス最適化機能です。"
    },
    {
        question: "問題 43:\nあるチームが、デプロイメント用のDatabricks Asset Bundles (DABs) を設計しています。彼らは、バンドルに必要なすべてのリソース、対象環境の設定、およびデプロイメント設定が、単一のバージョン管理されたファイルに含まれていることを確認したいと考えています。プロジェクトのルートにあるメイン設定ファイルとして必要なものは何でしょうか?",
        options: [
            "(A) 実行時にリソースを動的に作成する configure_bundle.py というPythonスクリプト。",
            "(B) バンドル名、ターゲット、含まれるリソース、および変数を含む databricks.yml というYAMLファイル。",
            "(C) 複数のTXTファイルを含むディレクトリ。各TXTファイルは、バンドル内の単一のリソースを記述している。",
            "(D) すべてのリソースの詳細と環境変数を格納する bundle_config.json という名前のJSONファイル。"
        ],
        answerIndex: 1,
        explanation: "(B) Databricks Asset Bundles (DABs) の核となる主要な構成ファイルは、プロジェクトのルートディレクトリに配置される databricks.yml (YAML形式) です。ここでジョブやパイプライン、環境ごとのターゲットを定義します。"
    },
    {
        question: "問題 44:\nデータエンジニアが、DatabricksのUIの「ファイルアップロードを使用してテーブルを作成または変更する」オプションを使用してCSVファイルをアップロードします。スキーマの推論が誤って行われるのを避けるため、Unity Catalog管理テーブルを作成する前に「列の型を自動的に検出する (Automatically detect column types)」を無効にします。結果はどうなりますか?",
        options: [
            "(A) すべての列はSTRINGデータ型で作成される。",
            "(B) 数値列は数値型として推論され、その他は文字列型として推論される。",
            "(C) 以前に推論された列の型は保持される。",
            "(D) 列の型が指定されていないため、テーブルの作成に失敗する。"
        ],
        answerIndex: 0,
        explanation: "(A) DatabricksのデータインポートUIで「列の型を自動的に検出する」のチェックを外した場合、CSVのすべてのデータはデフォルトである STRING (文字列) 型としてそのまま読み込まれます。"
    },
    {
        question: "問題 45:\nデータエンジニアが、同じコマンドセル内でPythonとSQLを記述しようとしてエラーに遭遇しています。エンジニアは、SELECT文でPythonの変数を使用できると考えていました。なぜコマンドが失敗するのでしょうか?",
        options: [
            "(A) Databricksは同一セル内での言語相互運用性をサポートしていますが、ScalaとSQLの間のみです。",
            "(B) Databricksは複数の言語をサポートしていますが、ノートブックごとに1つの言語のみです。",
            "(C) Databricksはセルごとに1つの言語をサポートしています。",
            "(D) Databricksは言語の相互運用性をサポートしていますが、特殊文字が使用されている場合に限ります。"
        ],
        answerIndex: 2,
        explanation: "(C) Databricksのノートブックでは、1つのセル内で実行できる基本言語は1つのみです（マジックコマンド %sql や %python はセル全体に適用されます）。Python変数を使ってSQLを実行したい場合は、同一セルに直接SQLを書くのではなく、Pythonコードとして spark.sql(f\"SELECT * FROM table WHERE id = {var}\") のように記述する必要があります。\n(B) ノートブック全体で1つではなく、セルごとに言語を切り替えることは可能です。"
    },
    {
        question: "問題 46:\nデータエンジニアは、複数のワークスペースにわたるデータ資産へのアクセスを制御し、一元化されたガバナンスポリシーを適用する必要があります。組織は、テーブル、スキーマ、カタログに対してきめ細かなアクセス制御を求めています。\nDatabricksのどの機能がこの要件を満たしていますか?",
        options: [
            "(A) Unity Catalog",
            "(B) MLflow",
            "(C) Delta Cache",
            "(D) DBFS"
        ],
        answerIndex: 0,
        explanation: "(A) Unity Catalogは、Databricksにおける統合データガバナンスソリューションであり、複数のワークスペースにまたがってカタログ、スキーマ、テーブル、列レベルのきめ細かなアクセス制御（RBAC）を一元管理できます。"
    },
    {
        question: "問題 47:\nデータエンジニアは、Databricks Notebooksに組み込まれているバージョン管理機能を使用するか、Databricks Repos (Gitフォルダー) を使用してプロジェクトのバージョン管理を行うかを決定する必要があります。\nDatabricks Notebooksの標準のバージョン管理と比較した場合、Databricks Reposを使用する利点として次のうちどれが挙げられますか?",
        options: [
            "(A) Databricks Reposを使用すると、ノートブックの以前のバージョンに戻すことができる。",
            "(B) Databricks ReposはDatabricks Data Intelligence Platform内に完全に格納されている。",
            "(C) Databricks Reposは複数のブランチの使用をサポートしている。",
            "(D) Databricks Reposでは、特定の変更に対してコメントする機能を提供している。",
            "(E) Databricks Reposは開発の進捗状況を自動的に保存する。"
        ],
        answerIndex: 2,
        explanation: "(C) Databricks Repos (現在はGit foldersと呼ばれます) はGitHubなどの外部Gitプロバイダーと連携するため、複数の「ブランチ（Branches）」を作成して並行開発を行うソフトウェアエンジニアリングのベストプラクティスをサポートします。組み込みのNotebook履歴機能にはブランチの概念はありません。"
    },
    {
        question: "問題 48:\nPythonの使用に慣れていないデータエンジニアは、2つの整数を加算してその合計を返すPython関数を作成する必要があります。\nデータエンジニアがこのタスクを完了するために使用できるコードブロックは次のどれですか。",
        options: [
            "(A) function add_integers(x, y): x + y",
            "(B) def add_integers(x, y): x + y",
            "(C) function add_integers(x, y): return x + y",
            "(D) def add_integers(x, y): return x + y",
            "(E) def add_integers(x, y): print(x + y)"
        ],
        answerIndex: 3,
        explanation: "(D) Pythonで関数を定義するキーワードは def であり、結果を「返す（戻り値とする）」ためには return ステートメントが必要です。\n(A), (C) function はJavaScript等のキーワードでありPythonでは構文エラーになります。\n(B) return がないため結果が返されません（Noneが返ります）。\n(E) print は画面に出力するだけであり、値は返しません。"
    },
    {
        question: "問題 49:\nコード変更後、構造化ストリーミング (Structured Streaming) ジョブが停止され、再開されました。エンジニアは、すべてのソースデータを再処理するのではなく、ジョブが中断したところから再開されることを望んでいます。\nどの構成が必要ですか?",
        options: [
            "(A) 出力モードの設定を完了する",
            "(B) 書き込みストリーム上で安定したチェックポイント位置 (checkpointLocation) を指定する",
            "(C) 対象テーブルで mergeSchema を有効にする",
            "(D) maxFilesPerTrigger を1に設定する"
        ],
        answerIndex: 1,
        explanation: "(B) Spark Structured Streamingにおいて、障害発生時や意図的な停止後に「どこまで処理したか」を記憶し、中断した正確な位置から処理を再開するためには checkpointLocation（チェックポイント）を設定することが必須です。"
    },
    {
        question: "問題 50:\n新しいデータエンジニアリングチームがELTプロジェクトに割り当てられました。新しいデータエンジニアリングチームには、プロジェクトを完全に管理するために、customersデータベース (スキーマ) に対する完全な権限が必要です。新しいデータエンジニアリングチームにデータベースに対する完全な権限を付与するには、次のコマンドのどれを使用できますか?",
        options: [
            "(A) GRANT SELECT, CREATE, MODIFY, USAGE ON DATABASE customers TO team;",
            "(B) GRANT ALL PRIVILEGES OF DATABASE team TO customers;",
            "(C) GRANT SELECT ON DATABASE customers TO team;",
            "(D) GRANT USAGE ON DATABASE customers TO team;",
            "(E) GRANT ALL PRIVILEGES ON DATABASE customers TO team;"
        ],
        answerIndex: 4,
        explanation: "(E) Unity Catalogにおいて、特定のデータベース（スキーマ）に対するすべての権限を一括で付与するための正しいSQL構文は GRANT ALL PRIVILEGES ON DATABASE <データベース名> TO <プリンシパル(グループ等)>; です。"
    },
    {
        question: "問題 51:\nデータエンジニアが、複雑な集計クエリを実行する必要のあるBIチーム向けに、ゴールドレイヤーテーブルを設計しています。要件では、ダッシュボードユーザーの低遅延を確保するためにデータは事前に計算されている必要がありますが、基となるデータは数時間に一度しか変更されません。これらの要件を満たすために、Unity Catalogではどのオブジェクトタイプを実装すべきでしょうか?",
        options: [
            "(A) ストリーミングテーブル",
            "(B) 外部テーブル",
            "(C) マテリアライズドビュー (Materialized View)",
            "(D) ビュー (View)"
        ],
        answerIndex: 2,
        explanation: "(C) 事前計算された結果を保存し、基のデータが変更されたときに効率的に更新できる「マテリアライズドビュー」が最適です。BIダッシュボードの低遅延クエリ要件を満たし、数時間ごとの更新にも適しています。\n(D) 通常のビューはクエリ実行時に毎回計算されるため、低遅延要件には適しません。"
    },
    {
        question: "問題 52:\nあるデータエンジニアは、小売業のユースケースにおいて、データ分析ダッシュボードへの入力データのクリーン度をDatabricks SQLダッシュボードで監視しています。このジョブには、売上が0である店舗レベルのレコードの数を返すDatabricks SQLクエリが含まれています。データエンジニアは、この値が0より大きい場合、メッセージングWebhookを介してチーム全体に通知したいと考えています。\n売上高が0ドルの店舗数が0より大きい場合に、データエンジニアがメッセージングWebhookを介してチーム全体に通知するために使用できるアプローチは次のどれですか?",
        options: [
            "(A) 1回限りの通知でアラートを設定する。",
            "(B) 新しいWebhookアラートの送信先 (Destination) を持つアラートを設定する。",
            "(C) 通知なしでアラートを設定する。",
            "(D) カスタムテンプレートを使用してアラートを設定する。",
            "(E) 新しい電子メールアラートの送信先を指定してアラートを設定する。"
        ],
        answerIndex: 1,
        explanation: "(B) Databricks SQLの「アラート」機能では、クエリの戻り値（店舗数が0より大きい等）をトリガーとして、あらかじめ設定した「アラート送信先 (Destinations)」に通知を送ることができます。チーム全体にメッセージングツール（Slackなど）で通知するにはWebhook送信先を使用します。"
    },
    {
        question: "問題 53:\nデータエンジニアが非常に大規模なデータセットを扱っており、関連データを同じファイルにまとめてクエリのパフォーマンスを向上させたいと考えています。エンジニアは、頻繁にフィルタリングされる列にZ-Order (Zオーダー) を適用することにしました。どのDelta Lakeコマンドを使用しますか?",
        options: [
            "(A) CACHE TABLE",
            "(B) ANALYZE TABLE",
            "(C) OPTIMIZE ... ZORDER BY",
            "(D) VACUUM"
        ],
        answerIndex: 2,
        explanation: "(C) Delta Lakeでファイルを圧縮（コンパクション）しつつ、特定の列に基づいてデータを物理的に並べ替え、クエリパフォーマンス（データスキッピング）を向上させるための正しいコマンドは OPTIMIZE テーブル名 ZORDER BY (列名) です。"
    },
    {
        question: "問題 54:\nデータエンジニアは、クラウドオブジェクトストレージからファイルを読み込み、DatabricksのSpark DataFrameに格納する必要があります。ファイルは、ヘッダーとカンマ区切り文字を含むCSV形式で保存されています。最初の行から列名が正しく推測されるようにするには、どのSpark DataFrameリーダーオプションを使用すればよいでしょうか?",
        options: [
            "(A) inferSchema",
            "(B) mode",
            "(C) delimiter",
            "(D) header"
        ],
        answerIndex: 3,
        explanation: "(D) CSVファイルの1行目を「データの値」ではなく「列名（ヘッダー）」として扱うためのオプションは header=\"true\"（または単純に header）です。\n(A) inferSchema はデータの値から「データ型（Int, Stringなど）」を自動推論するオプションです。"
    },
    {
        question: "問題 55:\nデータチームがクラスタープールを利用するシナリオを説明しているのは次のどれですか?",
        options: [
            "(A) 自動レポートはできるだけ早く更新（実行）される必要がある。",
            "(B) 自動化されたレポートは再現可能にする必要がある。",
            "(C) エラーを識別するには、自動レポートをテストする必要がある。",
            "(D) 自動化されたレポートは、複数の共同作業者間でバージョン管理する必要がある。",
            "(E) 自動化されたレポートは、すべての関係者が実行できる必要がある。"
        ],
        answerIndex: 0,
        explanation: "(A) クラスタープール (Instance Pools) は、あらかじめ準備されたアイドル状態の仮想マシンを保持しておく機能です。これによりクラスターの起動・スケールアウトにかかる時間を大幅に短縮できるため、遅延を最小限に抑えてジョブ（レポート等）を素早く実行したいシナリオに最適です。"
    },
    {
        question: "問題 56:\nデータエンジニアが databricks.yml ファイル内で etl_job というキーを持つジョブリソースを含むバンドルを作成しました。databricks bundle deploy を実行すると、ジョブはワークスペースに表示されますが、実行されません。デプロイされたジョブの実行をトリガーするコマンドはどれですか?",
        options: [
            "(A) databricks jobs submit -- json <config>",
            "(B) databricks bundle run etl_job",
            "(C) databricks bundle deploy -- run",
            "(D) databricks bundle execute etl_job"
        ],
        answerIndex: 1,
        explanation: "(B) Databricks Asset Bundles CLIを使用して、デプロイ済みの特定のリソース（ジョブやパイプライン）を実行するための正しいコマンドは databricks bundle run <リソースのキー> です。"
    },
    {
        question: "問題 57:\nデータエンジニアは、ネストされた device struct を含むPySpark DataFrame events_df を持っています。device struct 自体には、ネストされた location struct が含まれています。以下はその例です。\nevent_id STRING, device STRUCT<id: STRING, model: STRING, location: STRUCT<latitude: DOUBLE, longitude: DOUBLE>>, event_ts TIMESTAMP\n目標は、イベント識別子とタイムスタンプを保持したまま、ネストされたフィールドをルートレベルの列にフラット化することです。\nこれを実現するPySpark式はどれですか?",
        options: [
            "(A) events_df.select(\"event_id\", \"event_ts\", \"device.id\", \"device.model\", \"device.location.latitude\", \"device.location.longitude\")",
            "(B) events_df.withColumn(\"device_id\", events_df[\"device.model\"]).withColumn(\"location\", events_df[\"device.location\"])",
            "(C) events_df.select(\"event_id\", \"device[id]\", \"device[model]\", \"device.location[latitude]\", \"device.location[longitude]\", \"event_ts\")",
            "(D) events_df.select(\"event_id\", \"event_ts\", \"device.*\")"
        ],
        answerIndex: 0,
        explanation: "(A) PySparkで StructType にネストされたフィールドをフラット化するには、ドット記法 (device.id, device.location.latitude など) で各フィールドを明示的に選択するのが正しい方法です。\n(D) device.* を使うと1段階しかフラット化されず、location はStructのまま残ってしまいます。"
    },
    {
        question: "問題 58:\nあるプロジェクトに新しいデータエンジニアリングチームが配属されました。チームは、既存のテーブルを確認するために customers データベース（スキーマ）にアクセスする必要があります。チームには独自のグループ team があります。\n新しいチームにデータベース全体に対する必要な権限を付与するには、次のコマンドのどれを使用できますか?",
        options: [
            "(A) データベース teamに対する CREATE 権限を customer に付与します。",
            "(B) データベース customers の使用 (USAGE) 権限を team に付与します。",
            "(C) データベース顧客に対する CREATE 権限を team に付与します。",
            "(D) カタログ顧客のビューをチームに付与します。",
            "(E) カタログチームの使用権限を顧客に付与します。"
        ],
        answerIndex: 1,
        explanation: "(B) Unity Catalogにおいて、スキーマ（データベース）内のオブジェクトをリストしたりアクセスするための前提として、そのスキーマに対する USAGE 権限を付与する必要があります。正しいSQLは GRANT USAGE ON SCHEMA customers TO team; に相当します。"
    },
    {
        question: "問題 59:\nデータエンジニアが、Databricks上のLakehouse ETLジョブが突然4倍遅くなった原因を調査している。彼らは次のことを行う必要がある:\n- 不具合が発生した特定の Spark ステージを特定します。\n- シャッフル読み取り/書き込みサイズ、スピル (Spill)、GC時間などのタスクごとのメトリックをドリルダウンします。\n- これらの情報を、その実行中のエグゼキュータのリソース使用量と関連付けます。\nこの詳細なジョブレベルの根本原因分析の出発点となるのは、Databricksのどのネイティブ機能ですか?",
        options: [
            "(A) クラスターメトリクスを使用して、Spark UIを使用せずに過去のSparkおよびハードウェアメトリクスを表示する。",
            "(B) Spark UIを開かずにジョブ実行の詳細ページのタイムラインとグラフビューを使用して、すべてのステージおよびタスクレベルのSparkメトリクスを分析する。",
            "(C) クラスターのGangliaメトリクス。",
            "(D) ジョブ実行のコンピューティングからSpark UIを開き、[ジョブ]タブと[ステージ]タブを使用してタスクメトリックを調べる。"
        ],
        answerIndex: 3,
        explanation: "(D) Sparkのジョブ、ステージ、タスクレベルの詳細なパフォーマンス分析（シャッフルサイズ、メモリのスピル、GC時間の調査など）には、「Spark UI」にアクセスして各タブを調べるのが標準かつ不可欠なアプローチです。"
    },
    {
        question: "問題 60:\nデータエンジニアは Spark SQLテーブル my_table を削除しようとして、次のコマンドを実行します。\nDROP TABLE IF EXISTS my_table;\nこのコマンドを実行した後、エンジニアはデータファイルとメタデータファイルがファイルシステムから削除されたことに気付きます。\nこれらすべてのファイルが削除された理由を説明するのは次のどれですか?",
        options: [
            "(A) テーブルのデータが10GBを超えていた。",
            "(B) テーブルに場所 (LOCATION) が設定されていなかった。",
            "(C) テーブルは外部テーブル (External Table) であった。",
            "(D) テーブルのデータが10GB未満であった。",
            "(E) テーブルは管理対象テーブル (Managed Table) であった。"
        ],
        answerIndex: 4,
        explanation: "(E) Databricks (Unity Catalog/Hive Metastore) において、「管理対象テーブル (Managed Table)」を DROP TABLE すると、メタデータだけでなくクラウドストレージ上の実データファイルも削除されます。外部テーブル (External Table) の場合はメタデータのみが削除されます。"
    },
    {
        question: "問題 61:\n以下のデータを含むテーブル `random_values` を考えてみましょう。`count_if` 関数と、値がNULLの場合のカウントの動作として、以下のクエリの出力結果はどうなりますか?\nクエリ:\nSELECT count_if(col1 > 1) AS count_a, count(*) AS count_b, count(col1) AS count_c FROM random_values\nデータ (col1): 0, 1, 2, NULL, 2, 3",
        options: [
            "(A) 3, 6, 6 (366)",
            "(B) 4, 6, 6 (466)",
            "(C) 4, 6, 5 (465)",
            "(D) 3, 6, 5 (365)"
        ],
        answerIndex: 3,
        explanation: "(D)\n- count_if(col1 > 1): 1より大きい値（2, 2, 3）をカウントするため「3」になります。\n- count(*): NULLを含むすべての行数をカウントするため「6」になります。\n- count(col1): NULLを除外した実際の値の数をカウントするため「5」になります。\nしたがって、結果は 3, 6, 5 となります。"
    },
    {
        question: "問題 62:\nデータエンジニアが、APIレスポンスデータを含むブロンズテーブルをシルバーテーブルに変換しています。ブロンズテーブルには、JSONデータを含むSTRING型の `user_profile` 列があります。\n値の例: '{\"user_id\": \"12345\", \"name\": \"John\", \"age\": 32, \"email\": \"john@example.com\"}'\nシルバーテーブルは、下流のクエリごとにJSON解析を必要とせずに、このデータを簡単にクエリして分析できるようにする必要があります。シルバーテーブルのこの列を標準化するには、どの方法を用いるのが良いでしょうか?",
        options: [
            "(A) SELECT get_json_object(user_profile, 'user_id') AS user_id, ... FROM bronze_table;",
            "(B) SELECT user_profile.user_id AS user_id, ... FROM bronze_table;",
            "(C) SELECT from_json(user_profile, 'user_id STRING, name STRING, age STRING, email STRING') AS parsed_profile FROM bronze_table;",
            "(D) SELECT get_json_object(user_profile, '$.user_id') AS user_id, get_json_object(user_profile, '$.name') AS name, CAST(get_json_object(user_profile, '$.age') AS INT) AS age, get_json_object(user_profile, '$.email') AS email FROM bronze_table;"
        ],
        answerIndex: 3,
        explanation: "(D) 文字列型のJSONから特定の要素を抽出して列にするには get_json_object 関数を使用し、第2引数にJSONPath（例: $.user_id）を正しく指定する必要があります。\n(A) JSONPathの指定（$.）が欠落しているため正しく抽出できません。\n(B) 文字列型の列に対して直接ドット記法は使用できません。\n(C) from_json は構造体（Struct）を返すため、個別の列にフラット化する要件を完全に満たしていません。"
    },
    {
        question: "問題 63:\nデータエンジニアは、データセットが大きすぎてメモリに収まらないため、DataFrameをメモリではなくディスクに永続化 (キャッシュ) する必要があります。Sparkのどの永続化レベルがディスクストレージをサポートしていますか?",
        options: [
            "(A) メモリ専用 (MEMORY_ONLY)",
            "(B) メモリとディスク (MEMORY_AND_DISK)",
            "(C) メモリ専用 (MEMORY_ONLY)",
            "(D) メモリシリアライズ (MEMORY_ONLY_SER)"
        ],
        answerIndex: 1,
        explanation: "(B) データがメモリに収まらない場合にディスクに溢れさせる（スピルさせる）ことを許可するキャッシュ/永続化レベルは MEMORY_AND_DISK です。それ以外はメモリのみを使用します。"
    },
    {
        question: "問題 64:\nデータエンジニアは、`main.secure.events` (region STRING, event_id STRING) に対して行レベルのセキュリティ (Row-Level Security) を適用する必要があります。アカウントグループ `all_regions` のメンバーはすべての行を表示でき、その他のユーザーは `region='EU'` の行のみを表示できるようにする必要があります。この要件を満たすSQLシーケンスはどれですか?",
        options: [
            "(A)\nCREATE FUNCTION main.secure.region_filter(region STRING) RETURN IF(is_account_group_member('all_regions'), true, region = 'EU');\nALTER TABLE main.secure.events SET ROW FILTER main.secure.region_filter ON (region);",
            "(B) (Aの順序を逆にしたものなど)",
            "(C) ALTER VIEW main.secure.events ...",
            "(D) ALTER TABLE ... SET MASK ..."
        ],
        answerIndex: 0,
        explanation: "(A) 行レベルのセキュリティを適用するには、まず評価ロジックを含むユーザー定義関数（UDF）を CREATE FUNCTION で作成し、その後 ALTER TABLE ... SET ROW FILTER を使用して対象のテーブルにその関数を適用するのが正しい手順です。\n(D) SET MASK は列レベルのマスキング（Column Masking）用であり、行のフィルタリングには使用しません。"
    },
    {
        question: "問題 65:\nDelta Lakeを使用して電子カルテ(EHR)を保存している医療機関において、データアナリストは、最近のデータ修正が適用される前の2週間前の `patient_records` テーブルのスナップショットを分析する必要があります。データエンジニアは、アナリストがその特定の以前のバージョンを照会できるようにするために、どのようなアプローチを取るべきでしょうか?",
        options: [
            "(A) VACUUMコマンドを使用して、2週間以上前のテーブルのすべてのバージョンを削除し、アナリストが残りのバージョンをクエリできるようにする。",
            "(B) テーブルを切り捨て (TRUNCATE) てすべてのデータを削除し、2週間前のデータを再ロードしてクエリを実行できるようにする。",
            "(C) Deltaトランザクションログから2週間前のバージョン番号またはタイムスタンプを特定し、それをアナリストと共有して `VERSION AS OF` 構文を使用してクエリを実行させるか、別テーブルとして抽出する。",
            "(D) RESTOREコマンドを使用してテーブル全体を2週間前のバージョンに完全に復元し、アナリストにクエリさせる。"
        ],
        answerIndex: 2,
        explanation: "(C) 単に「過去の状態を分析（照会）したい」という要件に対しては、Delta Lakeのタイムトラベル機能 (VERSION AS OF または TIMESTAMP AS OF) を使用して読み取りのみを行うのが最も安全で適切なアプローチです。\n(D) RESTORE コマンドは現在のテーブルそのものを過去の状態に巻き戻してしまう（最新の修正を失う）ため、分析目的で行うべきではありません。"
    },
    {
        question: "問題 66:\nデータエンジニアは、いくつかのテーブルからデータエンティティを作成したいと考えています。このデータエンティティは、他のセッションの他のデータエンジニアによって使用される必要があり、物理的な場所 (ストレージ) に保存されている必要があります。\nデータエンジニアが作成する必要があるデータエンティティは次のどれですか?",
        options: [
            "(A) (欠損)",
            "(B) テーブル (Table)",
            "(C) データベース (Database / Schema)",
            "(D) 関数 (Function)",
            "(E) 一時ビュー (Temporary View)"
        ],
        answerIndex: 1,
        explanation: "(B) データを物理的なストレージに保存し、かつ他のセッションやユーザーと共有して利用できるデータエンティティは「テーブル（管理対象テーブルまたは外部テーブル）」です。\n(E) 一時ビュー (Temporary View) はメモリ上にのみ存在し、作成したSparkセッションが終了すると消滅するため、他のセッションと共有することはできません。"
    },
    {
        question: "問題 67:\nデータエンジニアは、大きなテーブルと小さなルックアップテーブルを結合するSparkジョブの処理が遅いことに気づきました。ルックアップテーブルはわずか数メガバイトです。結合操作のパフォーマンスを向上させるには、どのSpark最適化手法を適用すべきでしょうか?",
        options: [
            "(A) ソートマージ結合 (Sort Merge Join)",
            "(B) クロス結合 (直交座標結合 / Cross Join)",
            "(C) ブロードキャスト結合 (Broadcast Join)",
            "(D) シャッフル結合 (Shuffle Join)"
        ],
        answerIndex: 2,
        explanation: "(C) 数MBの小さなルックアップテーブルと大規模なテーブルを結合する場合、「ブロードキャスト結合 (Broadcast Join)」を使用するのが最も効率的です。小さなテーブルをすべてのワーカーノードのメモリにコピー（ブロードキャスト）することで、ネットワークを介した重いデータ移動（シャッフル）を回避できます。"
    },
    {
        question: "問題 68:\n開発者がDatabricks Connectを設定し、ローカルでPySparkコードの実行を開始しました。すると、DataFrameの操作はリモートクラスター上で実行されるものの、 `.show()` などのアクションの結果はローカルコンソールに直接表示されることに気づきました。この動作は、Databricks Connectの使用方法について何を示しているでしょうか?",
        options: [
            "(A) クラスターからの結果の手動同期が必要である。",
            "(B) Sparkの計算処理はすべてローカルで実行され、リモートファイルの読み取りのみを行っている。",
            "(C) ローカルクライアントからリモートクラスターへのSparkコマンドのプロキシとして機能している。",
            "(D) 開発者のマシン上にクラスター環境全体をミラーリングしている。"
        ],
        answerIndex: 2,
        explanation: "(C) Databricks Connectのアーキテクチャ（特にV2のSpark Connectベース）は、ローカル環境をクライアント（プロキシ）として機能させます。実際の重いデータ処理はリモートのDatabricksクラスターで実行され、その計算結果（表示用の数十行など）だけがローカルマシンに返されて表示されます。"
    },
    {
        question: "問題 69:\nデータエンジニアは、 `order_id` がnullの行がDeltaテーブルに書き込まれることを防止し、違反があった場合は書き込みが失敗するようにする必要があります。これを強制するコマンドはどれですか?",
        options: [
            "(A) ALTER TABLE orders ADD CONSTRAINT id_nn CHECK (order_id IS NOT NULL)",
            "(B) ALTER TABLE orders ALTER COLUMN order_id DROP NOT NULL",
            "(C) ALTER TABLE orders SET TBLPROPERTIES ('delta.enforceNotNull' = 'true')",
            "(D) CREATE TABLE orders (order_id INT COMMENT 'required')"
        ],
        answerIndex: 0,
        explanation: "(A) Delta Lakeでは標準SQLの CHECK 制約をサポートしており、ALTER TABLE ... ADD CONSTRAINT ... CHECK (...) を使用して特定の列が条件を満たすこと（ここではNOT NULL）を強制し、違反データが書き込まれるのを防ぐことができます。"
    },
    {
        question: "問題 70:\nデータエンジニアは、中央GitリポジトリからクローンしたDatabricksリポジトリでコードを実行しています。同僚から、変更が中央Gitリポジトリに同期されたことが報告されました。データエンジニアは、中央Gitリポジトリから変更を取得するために、Databricksリポジトリを同期する必要があります。\nこのタスクを実行するためにデータエンジニアが実行する必要があるGit操作は次のどれですか?",
        options: [
            "(A) クローン (Clone)",
            "(B) プル (Pull)",
            "(C) プッシュ (Push)",
            "(D) コミット (Commit)",
            "(E) フェッチ (Fetch)"
        ],
        answerIndex: 1,
        explanation: "(B) リモート（中央）Gitリポジトリで行われた最新の変更を、手元のローカルリポジトリ（Databricks上のGitフォルダー）に取り込んで同期・統合するためのGit操作は Pull です。"
    },
    {
        question: "問題 71:\nデータエンジニアは、/path/to/csv にある CSV ファイルのデータを使用して、Databricks にテーブルを作成する必要があります。\n次のコマンドを実行します。\nCREATE TABLE new_table\n[                     ]\nOPTIONS (\n  header = \"true\",\n  delimiter = \"|\"\n)\nLOCATION \"path/to/csv\"\n次のコード行のうち、上記の空白を埋めてタスクを正常に完了するものはどれですか?",
        options: [
            "(A) これらのコード行はタスクを正常に完了するのに必要ない。",
            "(B) USING DELTA",
            "(C) USING CSV",
            "(D) FROM CSV",
            "(E) FROM \"path/to/csv\""
        ],
        answerIndex: 2,
        explanation: "(C) CSVファイルから直接テーブルを作成する場合、フォーマットを指定する USING CSV 句が必須です。これを省略するとデフォルトで USING DELTA と解釈され、CSVファイルを読み込めずにエラーになります。"
    },
    {
        question: "問題 72:\nガバナンスチームは、カタログ全体の機密データを保護するために、Unity Catalogの属性ベースアクセス制御 (ABAC) ポリシーを使用するか、手動で適用する行フィルタと列マスクを使用するかを検討しています。チームは、手動で適用する行フィルタと列マスクではなく、ABACポリシーを使用すべき理由は何でしょうか?",
        options: [
            "(A) ABACポリシーは、管理タグを使用してテーブルと列を動的に照合するため、カタログで定義された単一のポリシーは、テーブルごとの設定なしに、そのカタログ内のすべての現在および将来のテーブルに自動的に適用される。",
            "(B) ABACポリシーでは、行フィルタと列マスクを Python と Scalaで直接記述できるが、手動で適用するフィルタとマスクでは SQL ユーザー定義関数のみを使用できる。",
            "(C) ABACポリシーはテーブルに加えてビューとマテリアライズドビューにも適用できるが、手動で適用する行フィルタと列マスクはテーブルにのみ適用できる。",
            "(D) ABACポリシーでは、クエリ時に単一ユーザーに対して同じテーブルに複数の異なる行フィルタを適用することがサポートされているが、手動で適用する行フィルタはテーブルごとに1つのフィルタに制限される。"
        ],
        answerIndex: 0,
        explanation: "(A) Unity CatalogのABAC（属性ベースのアクセス制御）の最大の利点は、タグを利用した動的なポリシー適用です。カタログレベルでタグに基づくポリシーを1つ定義すれば、現在および将来作成されるタグ付きテーブルすべてに自動適用され、手動での管理負担が大幅に軽減されます。"
    },
    {
        question: "問題 73:\nデータエンジニアが単一ノードクラスター (Single Node Cluster) を使用するシナリオを説明しているのは次のどれですか。",
        options: [
            "(A) 大規模なデータに自動的にスケールする能力について懸念がある場合",
            "(B) できるだけ早く更新される自動レポートを実行している場合",
            "(C) Databricks SQL内でSQLを操作している場合",
            "(D) 大量のデータを含むレポートを手動で実行する場合",
            "(E) 少量のデータを使って対話的に作業しているとき"
        ],
        answerIndex: 4,
        explanation: "(E) 単一ノードクラスターはワーカーノードを持たず、ドライバーノードのみで動作します。分散処理が不要な「少量のデータ」を扱う際や、ライブラリのテスト、対話的な探索的データ分析（EDA）をコストを抑えて行うのに最適です。"
    },
    {
        question: "問題 74:\nデータエンジニアは、タスクAが成功し、かつタスクBが失敗した場合にのみタスクCを実行する必要があります。この条件付きロジックを実装する依存関係構成はどれですか?",
        options: [
            "(A) タスクCは、条件ウィジェットを使用して、タスクA (すべて完了) とタスクB (すべて完了) に依存する。",
            "(B) タスクCはタスクA (成功) に依存しており、タスクBは負の依存関係として記載されている。",
            "(C) タスクCは2つの依存関係チェーンを使用する。タスクAはすべて成功し、タスクBは少なくとも1つが失敗する。",
            "(D) タスクCを実行する前に、タスクAとBの dbutils.jobs.taskValues をチェックする Pythonタスクを作成する。"
        ],
        answerIndex: 3,
        explanation: "(D) Databricks Jobsの標準の「Run If」条件は、依存する全タスクの「全体的なステータス（すべて成功、どれかが失敗など）」を評価するため、「Aが成功、かつBが失敗」という混在したステータスを直接評価できません。そのため、間にPythonタスク（またはIf/elseタスク）を挟み、前段のタスク値（taskValues）や状態をカスタムロジックで評価してルーティングする必要があります。"
    },
    {
        question: "問題 75:\nデータエンジニアは、Python変数 day_of_week が1で、Python変数 review_period が True の場合にのみ、Python プログラムの最後のブロックを実行したいと考えています。\nデータエンジニアは、この条件付きで実行されるコードブロックを開始するために、次のどの制御フローステートメントを使用する必要がありますか?",
        options: [
            "(A) if day_of_week=1 & review_period := \"True\":",
            "(B) if day_of_week == 1 and review_period == \"True\":",
            "(C) if day_of_week=1 and review_period:",
            "(D) if day_of_week == 1 and review_period:",
            "(E) if day_of_week=1 and review_period=\"True\":"
        ],
        answerIndex: 3,
        explanation: "(D) Pythonにおける等価比較演算子は == であり、論理積は and です。また、review_period がBoolean型（True/False）であるため、そのまま if review_period: として評価するのが最も適切で正しいPython構文です。"
    },
    {
        question: "問題 76:\nデータエンジニアがDatabricksでデータパイプラインを管理しており、複数のDeltaテーブルがさまざまな変換に使用されています。チームは、Deltaテーブル、ノートブック、ジョブ、ダッシュボード間の依存関係を特定するなど、パイプラインを通じたデータの流れを追跡したいと考えています。データエンジニアはこのプロセスを監視するためにUnity Catalogのリネージ機能を使用しています。Unity Catalogのデータリネージ機能は、Deltaテーブル、ノートブック、ジョブ、ダッシュボード間の関係の可視化をどのようにサポートするのでしょうか?",
        options: [
            "(A) Unity Catalogのリネージは、Deltaテーブル、ノートブック、ジョブ間の依存関係を視覚化するが、列レベルのトレースやダッシュボードとの関連性は提供しない。",
            "(B) Unity Catalogのリネージは、テーブルレベルでのリレーションシップの視覚化のみをサポートしており、ノートブック、ジョブ、ダッシュボードには拡張されない。",
            "(C) Unity Catalogのリネージは、テーブルとノートブック間の依存関係を追跡するインタラクティブなグラフを提供するが、ジョブ関連の依存関係やダッシュボードの視覚化は除外される。",
            "(D) Unity Catalogは、Deltaテーブル、ノートブック、ジョブ、ダッシュボード間の依存関係を視覚化するインタラクティブなグラフを提供するとともに、データ変換の列レベルの追跡もサポートする。"
        ],
        answerIndex: 3,
        explanation: "(D) Unity Catalogの自動リネージ機能は非常に強力であり、テーブル、ノートブック、ジョブ、さらにはDatabricks SQLのダッシュボードに至るまでのワークフロー全体をグラフィカルに可視化します。さらに、テーブルレベルだけでなく「列レベル（Column-level）」の追跡も完全にサポートしています。"
    },
    {
        question: "問題 77:\nデータエンジニアは、prodカタログ内の retailスキーマに存在する ordersという名前のテーブルを完全に定義 (完全修飾) する必要があります。\nUnity Catalogで正しい参照はどれですか?",
        options: [
            "(A) hive_metastore.orders",
            "(B) retail.orders",
            "(C) prod.retail.orders",
            "(D) prod.orders.retail"
        ],
        answerIndex: 2,
        explanation: "(C) Unity Catalogでは、すべてのデータオブジェクトにアクセスするために3レベルの名前空間（スリーレベルネームスペース）を使用します。正しい構造は <カタログ名>.<スキーマ名>.<テーブル名> であるため、prod.retail.orders が正解です。"
    },
    {
        question: "問題 78:\nデータエンジニアは、異なる地域のアナリストが同じビューを照会する際に、地域ごとに個別のビューを維持することなく、自分の地域の行のみが表示されるようにする必要があります。\nUnity Catalogにおいて、この要件を満たす方法はどれですか?",
        options: [
            "(A) 基となるテーブルに対して SELECT 権限を付与し、ビューに対してその権限を取り消す。",
            "(B) WHERE句で is_account_group_member() を使用して動的ビューを作成するか、テーブルに行フィルタ関数を適用する。",
            "(C) 地域ごとに、別々の外部ロケーションの下に外部テーブルを1つ作成する。",
            "(D) DESCRIBE HISTORY を使用して、行を挿入したユーザーでフィルタリングする。"
        ],
        answerIndex: 1,
        explanation: "(B) ユーザーの属性（所属グループなど）に基づいて表示される行を動的に制御するには、is_account_group_member() 関数を利用した「動的ビュー (Dynamic View)」を作成するか、Unity Catalogの「行フィルター (Row Filters)」を利用するのが標準的かつ最適な方法です。"
    },
    {
        question: "問題 79:\nデータエンジニアが既存のプロジェクトに参加したところ、プロジェクトリポジトリに次のクエリが表示されました。\nCREATE STREAMING LIVE TABLE loyal_customers AS\nSELECT customer_id\nFROM STREAM(LIVE.customers)\nWHERE loyalty_level = 'high';\nクエリに STREAM 関数が含まれている理由を説明するのは次のどれですか。",
        options: [
            "(A) 顧客テーブルは、PySpark DataFrameの構造化ストリーミングクエリへの参照である。",
            "(B) STREAM関数は必要ないので、エラーが発生する。",
            "(C) 顧客テーブルのデータは、前回の実行以降更新されている。",
            "(D) 作成されるテーブルはライブテーブルである。",
            "(E) 顧客テーブル (LIVE.customers) はストリーミングソース（継続的に追加されるデータ）として読み取られているため。"
        ],
        answerIndex: 4,
        explanation: "(E) Delta Live Tables (DLT) において STREAM() 関数は、対象のテーブル（ここでは LIVE.customers）を「ストリーミングソース」として扱うことを意味します。これにより、テーブル全体を毎回再計算するのではなく、新しく追加されたデータのみをインクリメンタル（増分的）に読み取って処理することが可能になります。（※原文の選択肢E「ストリーミング ライブテーブルです」は、ソースとしてストリーミング読み取りされていることを指します）"
    },
    {
        question: "問題 80:\nデータエンジニアが、Unity Catalogを有効にしたDatabricksワークスペースUIを使用します。データエクスプローラーで、カタログ corp_marketing、スキーマ campaigns を選択し、テーブル email_stats を表示します。エンジニアは、成長分析グループ (growth-analysts) がSQLウェアハウスから email_stats を読み取ることは許可しますが、corp_marketing または campaigns 内のオブジェクトを作成、変更、または削除することはできません。どの操作シーケンスが要件を満たしますか?",
        options: [
            "(A) 1. スキーマ campaigns で USE SCHEMA を付与。 2. テーブル email_stats で SELECT と MODIFY を付与。",
            "(B) 1. カタログ corp_marketing で USE CATALOG を付与。 2. スキーマ campaigns で USE SCHEMA を付与。 3. テーブル email_stats で SELECT 権限を付与。",
            "(C) 1. カタログ corp_marketing で USE CATALOG と CREATE SCHEMA を付与。 2. スキーマ campaigns で USE SCHEMA を付与。 3. テーブル email_stats で SELECT 権限を付与。",
            "(D) 1. スキーマ campaigns で USE SCHEMA と SELECT を付与。 2. テーブル email_stats で SELECT 権限を付与。"
        ],
        answerIndex: 1,
        explanation: "(B) Unity Catalogのセキュリティモデル（特権の継承と最小権限の原則）において、特定のテーブルを読み取るためには、その親にあたるカタログに USE CATALOG、スキーマに USE SCHEMA の権限がそれぞれ必要です。その上でテーブルに対して SELECT のみを付与することで、オブジェクトの変更・作成を防ぎつつ読み取りのみを許可する要件を完全に満たします。"
    },
    {
        question: "問題 81:\nDatabricks Lakehouseプラットフォームを使用する利点のうち、Delta Lakeによって提供されるものはどれですか?",
        options: [
            "(A) 1つのノートブックでリアルタイムに共同作業できる機能",
            "(B) 複雑なデータ操作を分散する機能",
            "(C) バッチおよびストリーミングワークロードをサポートする機能",
            "(D) さまざまな言語を使用して同じデータを操作する能力",
            "(E) クエリ失敗時のアラートを設定する機能"
        ],
        answerIndex: 2,
        explanation: "(C) Delta Lakeは、単一のストレージ層上でバッチ処理とストリーミング処理の両方をシームレスに統合して実行できるアーキテクチャ（構造化ストリーミングとの統合）を提供します。\n(A), (D) はDatabricksのワークスペース/ノートブックの機能です。\n(B) はApache Sparkの機能です。\n(E) はDatabricks JobsやSQLアラートの機能です。"
    },
    {
        question: "問題 82:\n次のシナリオのうち、データエンジニアが新しいDatabricksジョブタスクの「Depends on (依存関係)」フィールドを設定する必要があるのはどれですか?",
        options: [
            "(A) 別のタスクが可能な限り少ない計算リソースを使用する必要があるとき。",
            "(B) 別のタスクを新しいタスクに置き換える必要がある場合。",
            "(C) 新しいタスクを開始する前に、別の前段タスクが正常に完了している必要がある場合。",
            "(D) 新しいタスクが開始される前に別のタスクが失敗する必要がある場合。",
            "(E) 別のタスクが新しいタスクと同じ依存ライブラリを持っている場合。"
        ],
        answerIndex: 2,
        explanation: "(C) 「Depends on（依存先）」は、タスク間の実行順序を制御するための設定です。後続のタスクを実行する前に、前提となるタスクが正常に完了していなければならないシナリオで使用されます。"
    },
    {
        question: "問題 83:\nデータエンジニアが、ストリーミングパイプライン用の新しいDatabricks Asset Bundles (DABs) の開発を完了しました。構成が構文的に正しいことを確認し、コードをワークスペースにプッシュし、最後にパイプラインをトリガーして期待どおりに動作することを確認する必要があります。これらの手順を正しい順序で実行するために、エンジニアはどのDatabricks CLIコマンドシーケンスを使用すべきでしょうか?",
        options: [
            "(A) databricks bundle init -> databricks bundle deploy -> databricks bundle run",
            "(B) databricks bundle validate -> databricks bundle deploy -> databricks bundle run",
            "(C) databricks bundle validate -> databricks bundle sync -> databricks bundle execute",
            "(D) databricks bundle check -> databricks bundle upload -> databricks bundle start"
        ],
        answerIndex: 1,
        explanation: "(B) バンドルの構成が正しいか確認（validate）、ワークスペースにプッシュしてデプロイ（deploy）、そしてパイプラインを実行（run）する正しいコマンド順序です。"
    },
    {
        question: "問題 84:\n次のGit操作のうち、Databricks Repos (Gitフォルダー) のUIから直接実行できず、外部のGitプロバイダー側で実行する必要があるものはどれですか?",
        options: [
            "(A) クローン (Clone)",
            "(B) プッシュ (Push)",
            "(C) プル (Pull)",
            "(D) コミット (Commit)",
            "(E) プルリクエストの作成 (Create a Pull Request)"
        ],
        answerIndex: 4,
        explanation: "(E) DatabricksのGitフォルダー（Repos）UIでは、コミット、プッシュ、プル、新しいブランチの作成などは可能ですが、「Pull Request (PR) の作成」や「マージ操作」はDatabricks内ではできず、GitHubやGitLabなどの外部プロバイダーの画面で行う必要があります。"
    },
    {
        question: "問題 85:\n1つのジョブが2つのノートブックをそれぞれ別のタスクとして実行しています。データエンジニアは、ジョブの現在の実行において、ノートブックの1つの実行速度が遅いことに気づきました。ジョブの一環としてノートブックの実行速度が遅い理由を特定するために、使用できるアプローチは次のどれですか?",
        options: [
            "(A) ジョブタスクの実行が遅い理由を判断する方法はない。",
            "(B) ジョブUIの「Runs (実行)」タブに移動し、アクティブな実行をクリックして、実行中のノートブックを開いて確認する。",
            "(C) ジョブUIの「Runs (実行)」タブに移動して、処理ノートブックをすぐに確認できる。",
            "(D) ジョブUIの「Tasks (タスク)」タブに移動し、アクティブな実行をクリックして処理ノートブックを確認する。",
            "(E) ジョブUIの「Tasks (タスク)」タブに移動して、処理ノートブックをすぐに確認できる。"
        ],
        answerIndex: 1,
        explanation: "(B) 実行中（アクティブ）のジョブの状況を確認するには、Databricks Jobs UIの「Runs（実行履歴）」タブから該当するアクティブな実行（Active run）をクリックし、そこから進行中の特定のタスク（ノートブック）の詳細画面に入るのが正しい手順です。"
    },
    {
        question: "問題 86:\nデータエンジニアが、クラウドオブジェクトストレージから生のJSONファイルをロードするETLパイプラインをDatabricksで構築しています。このパイプラインは、ACIDトランザクションとスキーマの適用を保証すると同時に、複数の同時実行ジョブからのスケーラブルな読み書きをサポートする必要があります。エンジニアはターゲットとしてどのストレージ形式を使用すべきでしょうか?",
        options: [
            "(A) CSV",
            "(B) Avro",
            "(C) Parquet",
            "(D) Delta Lake"
        ],
        answerIndex: 3,
        explanation: "(D) ACIDトランザクションの保証、スキーマの適用（Schema Enforcement）、および複数ジョブからの安全な同時読み書き（並行性制御）をサポートするデータレイク上のストレージフォーマットは「Delta Lake」です。CSVやParquet単体ではこれらの機能を提供できません。"
    },
    {
        question: "問題 87:\n次のコマンドのうち、データベース (スキーマ) customer360 のストレージ上の物理的な場所 (Location) を返すものはどれですか?",
        options: [
            "(A) DROP DATABASE customer360;",
            "(B) DESCRIBE DATABASE customer360;",
            "(C) ALTER DATABASE customer360 SET DBPROPERTIES ('location' = '/user');",
            "(D) USE DATABASE customer360;",
            "(E) DESCRIBE LOCATION customer360;"
        ],
        answerIndex: 1,
        explanation: "(B) データベース（またはスキーマ）のメタデータプロパティ（保存先パスである Location を含む）を取得して表示するための正しいSQLコマンドは DESCRIBE DATABASE <データベース名> または DESCRIBE SCHEMA <スキーマ名> です。"
    },
    {
        question: "問題 88:\nある企業は、為替ダッシュボードの更新に関して、15分という厳格なサービスレベル契約 (SLA) を定めています。ソースデータは数分ごとに少量ずつ届きます。データエンジニアリングチームは、エンドツーエンドのレイテンシをSLA内に維持しつつ、コンピューティングコストとDBU消費量を最小限に抑えるジョブのトリガー戦略を必要としています。この要件を満たすために推奨される戦略はどれでしょうか?",
        options: [
            "(A) 12分ごとに実行されるように設定されたスケジュールトリガーを使用し、ストリーミングタスクが Trigger.AvailableNow (または Trigger.Once) を使用するように構成する。",
            "(B) SLAが危険にさらされることがないように、スケジュールされたトリガーを1分ごとに実行するように設定する。",
            "(C) ストレージにJSONファイルが到着するたびに起動するように構成されたファイル到着トリガーを使用する。",
            "(D) 継続トリガー (Continuous Trigger) を使用して、データが到着したらすぐに処理されるようにする。"
        ],
        answerIndex: 0,
        explanation: "(A) 15分のSLAを満たしつつ「コストを最小限に抑える」ためのベストプラクティスは、クラスターを常に稼働させるのではなく、定期的なスケジュール（例: 12分ごと）でクラスターを起動し、ストリーミング処理をバッチ的に実行して終了する Trigger.AvailableNow を使用することです。\n(B), (C), (D) これらはクラスターを常に稼働させるか、過剰な頻度で起動・停止を繰り返すため、コンピューティングコストが大幅に高くなります。"
    },
    {
        question: "問題 89:\nデータエンジニアが以下の2つのテーブルを左外部結合 (LEFT JOIN) します。\nテーブル sales:\n| customer_id | spend | units |\n| a1          | 28.94 | 7     |\n| a3          | 874.12| 23    |\n| a4          | 8.99  | 1     |\n\nテーブル favorite_stores:\n| customer_id | store_id |\n| a1          | s1       |\n| a2          | s1       |\n| a4          | s2       |\n\n実行クエリ:\nSELECT sales.customer_id, sales.spend, favorite_stores.store_id \nFROM sales \nLEFT JOIN favorite_stores ON sales.customer_id = favorite_stores.customer_id;\n\n上記のクエリを実行すると、次のうちどれが返されますか?",
        options: [
            "(A)\n|customer_id|spend |store_id|\n|a1         |28.94 |s1      |\n|a3         |874.12|NULL    |\n|a4         |8.99  |s2      |",
            "(B)\n|customer_id|spend |store_id|\n|a1         |28.94 |s1      |\n|a2         |NULL  |s1      |\n|a3         |874.12|NULL    |\n|a4         |8.99  |s2      |",
            "(C)\n|customer_id|spend |store_id|\n|a1         |28.94 |s1      |\n|a2         |NULL  |s1      | \n|a4         |8.99  |s2      |",
            "(D)\n|customer_id|spend |units|store_id|\n|a1         |28.94 |7    |s1      |\n|a4         |8.99  |1    |s2      |",
            "(E)\n|customer_id|spend |store_id|\n|a1         |28.94 |s1      |\n|a4         |8.99  |s2      |"
        ],
        answerIndex: 0,
        explanation: "(A) LEFT JOIN は、左側のテーブル (sales) のすべての行を維持し、右側のテーブル (favorite_stores) で一致する行があればデータを結合し、一致しない場合は NULL を返します。\n- a1 は両方に存在 -> s1 が結合される。\n- a3 は左側のみに存在 -> 右側の値は NULL になる。\n- a4 は両方に存在 -> s2 が結合される。\n- a2 は右側にしか存在しないため、結果には含まれません。また、units 列はSELECT句に指定されていないため含まれません。"
    },
    {
        question: "問題 90:\nデータアナリストはSQLノートブックに一連のクエリを作成しており、このプログラムを毎日実行したいと考えています。ただし、プログラムの「最後のクエリ」は日曜日のみ実行したいと考えています。この要件を最も適切に満たすアプローチは次のどれですか?",
        options: [
            "(A) PySparkを使用してクエリをラップし、Pythonの制御フロー (if文) を使用して最終クエリを実行する曜日を決定する。",
            "(B) データモデルを再設計して、最終クエリで使用されるデータを新しいテーブルに分離する。",
            "(C) プログラム全体を実行できるのは日曜日のみとする。",
            "(D) この機能を追加するには、Databricksに機能リクエストを送信する。",
            "(E) 最終クエリでソーステーブルへのアクセスを自動的に制限し、日曜日のみアクセスできるようにする。"
        ],
        answerIndex: 0,
        explanation: "(A) 純粋なSQLだけでは「特定の曜日のみ実行する」という動的な制御フローを簡単に実装できません。Databricksでは、PySpark（Python）の柔軟な if 文などの制御構造を利用して現在の日付・曜日を判定し、条件を満たした場合のみ spark.sql(\"...\") でクエリを実行するアプローチが標準的かつ最も簡単です。"
    },
    {
        question: "問題 91:\nブロンズテーブル (Bronze table) と生データ (Raw data) の関係を説明しているのは次のどれですか?",
        options: [
            "(A) ブロンズテーブルには、生データよりも精度の低いデータビューが含まれています。",
            "(B) ブロンズテーブルには集計が含まれますが、生データは集計されません。",
            "(C) ブロンズテーブルには、生データよりも真実に近いデータが含まれています。",
            "(D) ブロンズテーブルには、スキーマが適用された生データが含まれています。",
            "(E) ブロンズテーブルには、生データファイルよりも少ないデータが含まれています。"
        ],
        answerIndex: 3,
        explanation: "(D) メダリオンアーキテクチャにおいて、ブロンズ層は「元の状態のままの生データ」をDeltaテーブルとして保存する層です。生データ（CSVやJSONファイルなど）をDelta形式で保存する際に、基本となるスキーマ（データ型や列定義）が適用されて格納されます。"
    },
    {
        question: "問題 92:\nBIチームは、重要なテーブルに対して短時間で高並行性のSQLクエリを実行するため、クラスター管理やアイドルコストなしで、1秒未満の起動時間を必要とします。この要件に最適なコンピューティングオプションはどれですか?",
        options: [
            "(A) 自動スケーリング機能と120分自動終了設定を備えた All-Purpose クラスター (汎用クラスター)",
            "(B) サーバーレス SQL ウェアハウス (Serverless SQL Warehouse)",
            "(C) クエリごとに起動されるシングルノードのジョブクラスター",
            "(D) 自動停止が無効になっている従来の SQL ウェアハウス (Classic/Pro SQL Warehouse)"
        ],
        answerIndex: 1,
        explanation: "(B) サーバーレスSQLウェアハウスは、インフラストラクチャ（クラスター）の管理が不要で、瞬時（数秒以内）に起動し、高並行性のBIクエリを処理するのに最適化されています。アイドル状態になると素早くスケールダウン・停止するためコスト効率も優れています。"
    },
    {
        question: "問題 93:\nデータエンジニアが、Delta形式で保存されたデータを処理するSparkジョブを実行しています。エンジニアは、クエリのパフォーマンスを向上させるために、小さなファイルを大きなファイルに圧縮してファイル数を減らしたいと考えています。この操作を実行するDelta Lakeコマンドはどれですか?",
        options: [
            "(A) DELETE (削除)",
            "(B) OPTIMIZE (最適化)",
            "(C) GO",
            "(D) VACUUM (真空)"
        ],
        answerIndex: 1,
        explanation: "(B) Delta Lakeにおいて、多数の小さなファイル（スモールファイル問題）をより大きく効率的なサイズのファイルにまとめ直す（コンパクションする）コマンドは OPTIMIZE です。\n(D) VACUUM はコンパクションではなく、不要になった古い履歴ファイルを物理的に削除するコマンドです。"
    },
    {
        question: "問題 94:\nデータエンジニアは、Deltaテーブルへのストリーミング取り込み中に生成される小さなファイルの数を減らす必要があります。これらの小さなファイルは、下流のクエリでパフォーマンスの問題を引き起こしています。書き込み時に小さなファイルを自動的に圧縮 (コンパクション) するDelta Lakeの機能はどれですか?",
        options: [
            "(A) オートコンパクト (Auto Compaction)",
            "(B) キャッシュ (Caching)",
            "(C) 最適化 (OPTIMIZE)",
            "(D) VACUUM (真空)"
        ],
        answerIndex: 0,
        explanation: "(A) Delta Lakeには、テーブルへのデータ書き込みが完了した直後に、バックグラウンドで小さなファイルを自動的にまとめ直す「Auto Compaction (自動コンパクション)」機能があります。テーブルプロパティで delta.autoOptimize.autoCompact = true と設定することで有効になります。"
    },
    {
        question: "問題 95:\nデータエンジニアは、Databricksの ETLジョブの実行時間が過去1週間で5分 (基準値) から12分に増加したことを確認しました。Databricks Jobsの実行履歴ビューを使用して、エンジニアは実行時間の遅延が継続的か断続的かを特定し、根本原因を突き止める必要があります。エンジニアは、基準値に対する実行時間の傾向を分析するために、どのようなアクションを取るべきでしょうか?",
        options: [
            "(A) ジョブの実行履歴にあるクラスターメトリクスを比較して、遅延の原因となっているリソースの急増を特定する。",
            "(B) 過去のジョブ実行をアーカイブし、ベースラインカウンターをリセットして、現在のパフォーマンスを正確に比較できるようにする。",
            "(C) 履歴データは7日後には無関係になるため、すぐにジョブを再実行して新しいベースラインを確立する。",
            "(D) 実行時間が前回の実行時間を超えた場合、クラスターサイズを自動的に増加する。"
        ],
        answerIndex: 0,
        explanation: "(A) Databricksのジョブ実行履歴（Runs history）画面では、過去の実行ごとの所要時間の推移（傾向）とクラスターメトリクス（CPU、メモリ使用量など）を確認できます。これらの履歴を分析し、リソースの逼迫などが起きていないかを比較して根本原因を特定するのが正しいトラブルシューティング手順です。"
    },
    {
        question: "問題 96:\nデータエンジニアが組織を退職しました。データチームは、そのデータエンジニアのDeltaテーブルの所有権 (Ownership) を新しいデータエンジニアに移管する必要があります。新しいデータエンジニアは、データチームのリードエンジニアです。\n元のデータエンジニアがすでにアクセス権を失っていると仮定した場合、データエクスプローラー (Catalog Explorer) でDeltaテーブルの所有権を移管する操作を行えるのは次のうち誰ですか?",
        options: [
            "(A) ワークスペース管理者 (Workspace Admin)",
            "(B) この移管は不可能である",
            "(C) 元のデータエンジニア",
            "(D) 新しいリードデータエンジニア",
            "(E) Databricksアカウント担当者"
        ],
        answerIndex: 0,
        explanation: "(A) オブジェクトの所有者が不在（退職など）になった場合、Unity Catalogにおいてその所有権を別のユーザーやグループに強制的に変更・移管できるのは「メタストア管理者」または「ワークスペース管理者」です。実務上は個人のユーザーではなく、グループに所有権を持たせることが推奨されます。"
    },
    {
        question: "問題 97:\nデータエンジニアが、複数の変換処理で同じDataFrameに繰り返しアクセスするSparkジョブを実行しています。処理間で中間結果をメモリに保存することでパフォーマンスを向上させるには、どのSparkテクニックを使用すべきでしょうか?",
        options: [
            "(A) パーティショニング (Partitioning)",
            "(B) ブロードキャスト (Broadcast)",
            "(C) チェックポイント (Checkpointing)",
            "(D) キャッシング (Caching)"
        ],
        answerIndex: 3,
        explanation: "(D) Sparkにおいて、複数回再利用されるDataFrame（中間結果）をメモリ（またはディスク）に保持し、都度再計算されるのを防いでパフォーマンスを向上させる技術は「キャッシング (df.cache() または df.persist())」です。"
    },
    {
        question: "問題 98:\nデータエンジニアがデータパイプラインを設計しています。ソースシステムは、他のプロセスでも使用される共有ディレクトリにファイルを生成します。そのため、ファイルは削除されずディレクトリ内に蓄積され続けます。データエンジニアは、パイプラインの前回の実行以降に追加されたファイルを特定し、各実行で「新しいファイルのみ」を取り込むようにパイプラインを設定する必要があります。\nデータエンジニアがこの問題を解決するために使用できるツールは次のどれですか?",
        options: [
            "(A) データエクスプローラー (Data Explorer)",
            "(B) Databricks SQL",
            "(C) Delta Lake",
            "(D) Unity Catalog",
            "(E) Auto Loader (オートローダー)"
        ],
        answerIndex: 4,
        explanation: "(E) クラウドストレージ（共有ディレクトリなど）に継続的に追加・蓄積されるファイル群の中から、「まだ処理されていない新しいファイルのみ」を自動的に検知してインクリメンタル（増分的）に読み込むための最適なDatabricksの機能は「Auto Loader」です。"
    },
    {
        question: "問題 99:\n前日の `gold.daily_orders` の行数が1,000を下回った場合、データエンジニアに電子メールで通知する必要があります。\nDatabricksのSQL機能のうち、この要件を満たすものはどれですか?",
        options: [
            "(A) スケジュール更新機能付きダッシュボード",
            "(B) しきい値条件に基づいて設定された Databricks SQL アラート",
            "(C) ON VIOLATION FAIL UPDATE の Delta テーブル制約 (Expectation)",
            "(D) イベントログに書き込む DESCRIBE HISTORY ジョブ"
        ],
        answerIndex: 1,
        explanation: "(B) Databricks SQLの「アラート (Alerts)」機能を使用すると、特定のクエリ（例: SELECT count(*) FROM gold.daily_orders）を定期実行し、その結果が特定のしきい値（1,000未満など）を満たした場合に、指定した宛先にメールやSlackで通知を送ることができます。"
    },
    {
        question: "問題 100:\nデータエンジニアが、Databricksデータインテリジェンスプラットフォーム上で、ブロンズからシルバーへのパイプラインを設計しています。ソースシステムは毎日CSVファイルを送信し、時間の経過とともに新しいオプション列が追加される可能性があります。データエンジニアは、以下の条件を満たすストレージ形式とテーブル機能を求めています。\n- このテーブルは、定義されたスキーマに準拠しない書き込みを防止する。\n- テーブルを手動で再作成することなく、新しいオプションの列を追加するためにスキーマを進化させることができる。\n- デバッグや監査のために、テーブルの以前のバージョンを後で照会することができる。\nどの解決策が要件を満たしていますか?",
        options: [
            "(A) Sparkのデフォルトのスキーマ推論を使用した Parquet テーブルを使用し、スキーマが変更されたときにジョブを再実行する。",
            "(B) CSVファイルに対して Auto Loader のスキーマ推論を使用した外部テーブルを使用する。",
            "(C) Delta テーブルとそのネイティブ機能を使用する。",
            "(D) スキーマ強制付きの Delta テーブルを使用し、新しい列が追加されるたびにテーブルを手動で再作成する。"
        ],
        answerIndex: 2,
        explanation: "(C) Delta Lakeはネイティブの機能として、「スキーマの強制 (Schema Enforcement: 不正なデータの書き込み防止)」、「スキーマの進化 (Schema Evolution: 新しい列の自動追加)」、および「タイムトラベル (以前のバージョンの照会)」をすべてサポートしています。テーブルの再作成は不要です。"
    },
    {
        question: "問題 101:\n本番環境用のETLノートブックは毎晩1回実行され、現在は24時間稼働している共有の All-Purpose クラスター (汎用クラスター) 上で実行されています。\nスケジュールを維持しながらコストを削減できる変更はどれですか?",
        options: [
            "(A) 実行速度を上げるために、汎用クラスターの最小ワーカー数を増やす。",
            "(B) 実行開始時に作成され、実行終了時に終了する ジョブクラスター (Job Cluster) を使用するようにスケジュールされたジョブを設定する。",
            "(C) ノートブックを自動停止が無効になっている SQL ウェアハウスに移動する。",
            "(D) ノートブックを、必要に応じて更新されるグローバル一時ビューに変換する。"
        ],
        answerIndex: 1,
        explanation: "(B) All-Purposeクラスター（汎用クラスター）は開発・対話型実行向けであり、時間あたりの単価 (DBU) が高く設定されています。本番環境のスケジュールジョブには、実行時のみ起動して終了し、単価も安価な「ジョブクラスター (Job Cluster)」を使用するのがコスト削減のベストプラクティスです。"
    }
];
