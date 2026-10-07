const quizData = [
    {
        category: "PySpark / Spark SQL",
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
        category: "Databricks Compute / Architecture",
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
        category: "Delta Lake",
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
        category: "Delta Live Tables",
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
        category: "PySpark / Spark SQL",
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
        category: "Databricks Asset Bundles / Repos",
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
        category: "PySpark / Spark SQL",
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
        category: "Medallion Architecture",
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
        category: "Delta Lake",
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
        category: "Databricks Compute / Architecture",
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
        category: "Medallion Architecture",
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
        category: "PySpark / Spark SQL",
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
        category: "Databricks Asset Bundles / Repos",
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
        category: "Databricks Jobs / Workflows",
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
        category: "PySpark / Spark SQL",
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
        category: "PySpark / Spark SQL",
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
        category: "PySpark / Spark SQL",
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
        category: "Structured Streaming / Auto Loader",
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
        category: "Structured Streaming / Auto Loader",
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
        category: "Medallion Architecture",
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
        category: "Delta Lake",
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
        category: "PySpark / Spark SQL",
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
        category: "Databricks Compute / Architecture",
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
        category: "PySpark / Spark SQL",
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
        category: "Delta Lake",
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
        category: "Databricks Compute / Architecture",
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
        category: "Delta Live Tables",
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
        category: "PySpark / Spark SQL",
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
        category: "PySpark / Spark SQL",
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
        category: "Structured Streaming / Auto Loader",
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
        category: "PySpark / Spark SQL",
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
        category: "PySpark / Spark SQL",
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
        category: "Databricks Jobs / Workflows",
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
        category: "Databricks Jobs / Workflows",
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
        category: "PySpark / Spark SQL",
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
        category: "Structured Streaming / Auto Loader",
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
        category: "PySpark / Spark SQL",
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
        category: "Delta Lake",
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
        category: "Unity Catalog / Data Governance",
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
        category: "Unity Catalog / Data Governance",
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
        category: "Structured Streaming / Auto Loader",
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
        category: "Databricks Asset Bundles / Repos",
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
        category: "Structured Streaming / Auto Loader",
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
        category: "Databricks Workspace",
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
        category: "Unity Catalog / Data Governance",
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
        category: "Databricks Asset Bundles / Repos",
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
        category: "PySpark / Spark SQL",
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
        category: "Structured Streaming / Auto Loader",
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
        category: "Unity Catalog / Data Governance",
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
        category: "Unity Catalog / Data Governance",
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
        category: "Databricks Workspace",
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
        category: "Delta Lake",
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
        category: "PySpark / Spark SQL",
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
        category: "Databricks Compute / Architecture",
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
        category: "Databricks Asset Bundles / Repos",
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
        category: "PySpark / Spark SQL",
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
        category: "Unity Catalog / Data Governance",
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
        category: "Databricks Compute / Architecture",
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
        category: "Unity Catalog / Data Governance",
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
        category: "PySpark / Spark SQL",
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
        category: "PySpark / Spark SQL",
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
        category: "PySpark / Spark SQL",
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
        category: "Unity Catalog / Data Governance",
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
        category: "Delta Lake",
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
        category: "Unity Catalog / Data Governance",
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
        category: "PySpark / Spark SQL",
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
        category: "Databricks Compute / Architecture",
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
        category: "Delta Lake",
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
        category: "Databricks Asset Bundles / Repos",
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
        category: "PySpark / Spark SQL",
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
        category: "Unity Catalog / Data Governance",
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
        category: "Databricks Compute / Architecture",
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
        category: "Databricks Jobs / Workflows",
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
        category: "PySpark / Spark SQL",
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
        category: "Unity Catalog / Data Governance",
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
        category: "Unity Catalog / Data Governance",
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
        category: "Unity Catalog / Data Governance",
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
        category: "Delta Live Tables",
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
        category: "Unity Catalog / Data Governance",
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
        category: "Delta Lake",
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
        category: "Databricks Jobs / Workflows",
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
        category: "Databricks Asset Bundles / Repos",
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
        category: "Databricks Asset Bundles / Repos",
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
        category: "Databricks Jobs / Workflows",
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
        category: "Delta Lake",
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
        category: "Unity Catalog / Data Governance",
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
        category: "Structured Streaming / Auto Loader",
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
        category: "PySpark / Spark SQL",
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
        category: "Databricks Workspace",
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
        category: "Medallion Architecture",
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
        category: "Databricks Compute / Architecture",
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
        category: "Delta Lake",
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
        category: "Delta Lake",
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
        category: "Databricks Jobs / Workflows",
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
        category: "Unity Catalog / Data Governance",
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
        category: "PySpark / Spark SQL",
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
        category: "Structured Streaming / Auto Loader",
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
        category: "Databricks Workspace",
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
        category: "Delta Lake",
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
        category: "Databricks Compute / Architecture",
        question: "問題 101:\n本番環境用のETLノートブックは毎晩1回実行され、現在は24時間稼働している共有の All-Purpose クラスター (汎用クラスター) 上で実行されています。\nスケジュールを維持しながらコストを削減できる変更はどれですか?",
        options: [
            "(A) 実行速度を上げるために、汎用クラスターの最小ワーカー数を増やす。",
            "(B) 実行開始時に作成され、実行終了時に終了する ジョブクラスター (Job Cluster) を使用するようにスケジュールされたジョブを設定する。",
            "(C) ノートブックを自動停止が無効になっている SQL ウェアハウスに移動する。",
            "(D) ノートブックを、必要に応じて更新されるグローバル一時ビューに変換する。"
        ],
        answerIndex: 1,
        explanation: "(B) All-Purposeクラスター（汎用クラスター）は開発・対話型実行向けであり、時間あたりの単価 (DBU) が高く設定されています。本番環境のスケジュールジョブには、実行時のみ起動して終了し、単価も安価な「ジョブクラスター (Job Cluster)」を使用するのがコスト削減のベストプラクティスです。"
    },
    {
        category: "Unity Catalog / Data Governance",
        question: "問題 101:\nデータエンジニアは、さまざまなデータソースにリンクされた複数の外部テーブルを管理しています。データエンジニアは、これらの外部テーブルを効率的に管理し、特定の外部テーブルへのアクセスに必要な権限のみがユーザーに付与されるようにしたいと考えています。データエンジニアは、これらの外部テーブルへのアクセスをどのように管理すべきでしょうか?",
        options: [
            "(A) コンテナレベルで Azure Blob Storage のアクセス許可を設定し、すべての外部テーブルへのアクセスを許可する。",
            "(B) すべての外部テーブルへの完全なアクセス権を持つ単一のユーザーロールを作成し、それをすべてのユーザーに割り当てる。",
            "(C) Databricksワークスペースレベルで権限を付与する。これは自動的にすべての外部テーブルに適用される。",
            "(D) Unity Catalogを使用して、各外部テーブルのアクセス制御と権限を個別に管理する。"
        ],
        answerIndex: 3,
        explanation: "(D) Unity Catalogを使用すると、細かなアクセス制御（RBAC）をテーブル単位で一元的に管理できます。これにより、特定の外部テーブルに対する最小限のアクセス権限のみをユーザーやグループに安全に割り当てることができます。\n(A) ストレージレベルの権限調整では個別テーブル単位のアクセス制御は不可能です。\n(B) すべてのユーザーに完全アクセス権を与えるのはセキュリティリスクが高く最小権限の原則に反します。\n(C) ワークスペース全体での権限付与は粒度が大きすぎます。"
    },
    {
        category: "PySpark / Spark SQL",
        question: "問題 102:\nデータエンジニアに新しいデータレコードが渡されました:\nid STRING = 'a1', rank INTEGER = 6, rating FLOAT = 9.4\n既存の Delta テーブル my_table に新しいレコードを追加するために使用できる SQL コマンドは次のどれですか?",
        options: [
            "(A) INSERT VALUES ('a1', 6, 9.4) INTO my_table",
            "(B) INSERT INTO my_table VALUES ('a1', 6, 9.4)",
            "(C) UPDATE VALUES ('a1', 6, 9.4) my_table",
            "(D) UPDATE my_table VALUES ('a1', 6, 9.4)",
            "(E) my_table UNION VALUES ('a1', 6, 9.4)"
        ],
        answerIndex: 1,
        explanation: "(B) SQLにおいてテーブルに新しい行（レコード）を挿入するための標準的かつ正しい構文は INSERT INTO <テーブル名> VALUES (...) です。\n(A) INTO と VALUES の順番が逆になっています。\n(C), (D) UPDATE は既存データの書き換えに使用する構文です。\n(E) UNION は複数のSELECT結果を結合する集合演算子です。"
    },
    {
        category: "Delta Lake",
        question: "問題 103:\n次のコードブロックのうち、列 age の値が 25 より大きい行を既存の Delta テーブル my_table から削除するものはどれですか?",
        options: [
            "(A) DELETE FROM my_table WHERE age > 25",
            "(B) DROP FROM my_table WHERE age > 25",
            "(C) SELECT * FROM my_table WHERE age > 25",
            "(D) UPDATE my_table SET age = NULL WHERE age > 25",
            "(E) REMOVE FROM my_table WHERE age > 25"
        ],
        answerIndex: 0,
        explanation: "(A) Deltaテーブルから特定の条件に合致する「行」を削除するための正しいSQL構文は DELETE FROM <テーブル名> WHERE <条件> です。\n(B) DROP はテーブルや列（スキーマ）全体を削除・破壊する際に使用します。\n(C) SELECT はデータを照会（取得）するだけです。\n(E) REMOVE という標準SQLコマンドは存在しません。"
    },
    {
        category: "Structured Streaming / Auto Loader",
        question: "問題 104:\nデータエンジニアは、構造化ストリーミング (Structured Streaming) ジョブがソースで利用可能なすべてのデータを処理した後、自動的に停止することを望んでいます。そうすることで、ジョブを継続的に実行するのではなく、スケジュールされたジョブクラスター上で実行できるようになります。どのトリガーを設定すべきですか?",
        options: [
            "(A) .trigger(processingTime=\"0 seconds\")",
            "(B) .trigger(continuous=\"1 second\")",
            "(C) .trigger(availableNow=True)",
            "(D) .trigger(once=True)"
        ],
        answerIndex: 2,
        explanation: "(C) availableNow=True（Trigger.AvailableNow）は、現在ソースで利用可能な全データを増分的に処理した後に自動的にストリームを完了・停止する設定です。ジョブクラスターでのコスト効率の良い定期実行（マイクロバッチ実行）に最適です。\n(D) once=True は古い構文であり、大規模データセットにおける並列処理の最適化がなされている availableNow=True が現在のベストプラクティスです。"
    },
    {
        category: "PySpark / Spark SQL",
        question: "問題 105:\n次のコードブロックのうち、既に同じ名前のテーブルが存在するかどうかに関わらず、指定されたスキーマで空のDeltaテーブルを作成するためにSQL DDLコマンドを使用するものはどれですか?",
        options: [
            "(A) CREATE OR REPLACE TABLE table_name (employeeId STRING, startDate DATE, avgRating FLOAT)",
            "(B) CREATE TABLE table_name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT",
            "(C) CREATE OR REPLACE TABLE table_name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT USING DELTA",
            "(D) CREATE TABLE IF NOT EXISTS table_name (employeeId STRING, startDate DATE, avgRating FLOAT)"
        ],
        answerIndex: 0,
        explanation: "(A) CREATE OR REPLACE TABLE を使用すると、既存テーブルの有無に関わらず常に指定した定義の新しい空のテーブルを作成（置換）できます。\n(D) IF NOT EXISTS は既存のテーブルがある場合には作成をスキップするため、「存在するかどうかに関わらず作成する」という条件を満たしません。"
    },
    {
        category: "PySpark / Spark SQL",
        question: "問題 106:\nデータエンジニアがSpark SQLに基づいたETLプロセスを開発している最中に、実行が失敗しました。Spark UIを確認すると「java.lang.OutOfMemoryError: Java heap space」というエラーが表示されていました。この問題を解決するために効果的なアプローチはどれですか?",
        options: [
            "(A) クエリで処理するデータ量を減らすためにフィルター条件を絞り込み、必要に応じてドライバー/ワーカーのノードサイズを拡大する。",
            "(B) ドライバノードのサイズを上げて、パーティションの自動シャッフルを完全に無効化する。",
            "(C) クエリパフォーマンスを向上させるためにデータセット全体をメモリにキャッシュする。",
            "(D) シャッフルパーティションを小数の50に固定して割り当てを強制する。"
        ],
        answerIndex: 0,
        explanation: "(A) OOM（メモリ不足エラー）に対処するためには、クエリの段階で不要なデータをフィルター除去して読み込み量を減らすことや、処理に必要なコンピュートリソース（ノードサイズ/メモリ）をスケールアップさせることが根本的な是正措置になります。\n(C) メモリが不足している状態でキャッシュ（cache()）を適用すると、さらにメモリを圧迫して症状が悪化します。"
    },
    {
        category: "Delta Lake",
        question: "問題 107:\nDelta Lake テーブルのデータは、主に次のどのファイル形式（ストレージフォーマット）で保存されますか?",
        options: [
            "(A) Delta",
            "(B) CSV",
            "(C) JSON",
            "(D) Parquet",
            "(E) Databricks独自のプロプライエタリ形式"
        ],
        answerIndex: 3,
        explanation: "(D) Delta Lakeの実データ（基本フォーマット）は、オープンフォーマットである「Parquet（パルケ/パーケット）」形式で列指向ストレージとして保存されます。これにJSON形式のトランザクションログ（_delta_log）が組み合わさることでDelta Lakeを構成しています。"
    },
    {
        category: "Structured Streaming / Auto Loader",
        question: "問題 108:\nデータエンジニアがストリーミングパイプラインを設計しており、集計クエリの状態情報（State）をSparkが保持する期間を制限したいと考えています。遅延データの処理限界（許容期間）を定義する構造化ストリーミングの機能はどれですか?",
        options: [
            "(A) パーティション (Partitioning)",
            "(B) チェックポイント (Checkpointing)",
            "(C) キャッシュ (Caching)",
            "(D) ウォーターマーク (Watermarking)"
        ],
        answerIndex: 3,
        explanation: "(D) 「ウォーターマーク (Watermarking)」は、ストリーミング集計において「どれくらい遅れて到着したデータまでを処理対象に含めるか」という時間的な閾値を定義する機能です。これにより、古い不要な状態情報をメモリから削除し、メモリ溢れを防ぎます。"
    },
    {
        category: "Databricks Compute / Architecture",
        question: "問題 109:\nデータエンジニアリングチームがクラウドストレージからデータを読み込むためのPythonノートブックを作成しました。このジョブはテスト済みで、今後は本番環境でスケジュール実行する必要があります。コストと効率の観点から、どのコンピューティング環境を使用するのが最適でしょうか?",
        options: [
            "(A) サーバーレス SQL ウェアハウス (Serverless SQL Warehouse)",
            "(B) ジョブクラスター (Job Cluster)",
            "(C) All-Purposeクラスター (汎用クラスター)",
            "(D) 単一ノードのインタラクティブクラスター"
        ],
        answerIndex: 1,
        explanation: "(B) 本番環境でスケジュール実行される自動化ジョブには、「ジョブクラスター (Job Cluster)」を使用するのが最も低コストかつ推奨されるベストプラクティスです。ジョブの開始時に起動し、終了時に自動的に破棄されます。\n(C) 汎用クラスター（All-Purpose）は開発・インタラクティブ実行用であり、単価が高いため本番ジョブには不向きです。"
    },
    {
        category: "Delta Live Tables",
        question: "問題 110:\nデータエンジニアはデータパイプラインのメンテナンスを行っています。データの取り込み時に、ソースデータの品質が低下し始めていることに気付きました。データエンジニアは、データ品質の検証や監視プロセスを自動化したいと考えています。この問題を解決するために使用できる最適なツールはどれですか?",
        options: [
            "(A) Catalog Explorer (データエクスプローラー)",
            "(B) Delta Lake",
            "(C) Unity Catalog",
            "(D) Delta Live Tables (DLT)",
            "(E) Auto Loader"
        ],
        answerIndex: 3,
        explanation: "(D) Delta Live Tables (DLT) には「Expectations（期待値）」という強力なデータ品質監視機能が組み込まれています。これを使用することで、パイプラインの実行中にデータの品質制約をチェックし、違反データのドロップ・警告・パイプライン停止などを自動制御できます。"
    },
    {
        category: "Delta Live Tables",
        question: "問題 111:\nDeclarative Pipeline (Delta Live Tables / DLT) において、パイプラインの実行中に order_id が null のレコードが silver テーブルから破棄（スキップ）されるように設定したいと考えています。どの期待値句 (Expectation) を使用すべきでしょうか?",
        options: [
            "(A) CONSTRAINT valid_id EXPECT (order_id IS NOT NULL) ON VIOLATION DROP ROW",
            "(B) CONSTRAINT valid_id EXPECT (order_id IS NOT NULL) ON VIOLATION FAIL UPDATE",
            "(C) CONSTRAINT valid_id EXPECT (order_id IS NOT NULL)",
            "(D) ALTER TABLE silver_orders ADD CONSTRAINT valid_id CHECK (order_id IS NOT NULL)"
        ],
        answerIndex: 0,
        explanation: "(A) DLTにおいて、条件（ここでは order_id IS NOT NULL）を満たさない「違反行のみをテーブルから削除（ドロップ）」してパイプラインの処理を続行させる正しい構文は CONSTRAINT <制約名> EXPECT (<条件>) ON VIOLATION DROP ROW です。\n(B) FAIL UPDATE は違反行が1件でも発生するとパイプライン全体を失敗停止させます。\n(C) ON VIOLATION 句を省略した場合はデフォルトで「違反行もそのまま保持し、イベントログに警告のみ記録」となります。\n(D) ALTER TABLE CHECK 制約は標準Deltaテーブルの制約であり、DLTの動的な行ドロップ機能ではありません。"
    },
    {
        category: "Databricks Jobs / Workflows",
        question: "問題 112:\nデータエンジニアは、毎晩実行され、複数のノートブックを順番に実行する再現可能なETLワークフローを作成したいと考えています。このワークフローは、失敗したタスクの自動リトライや、実行状況の監視機能を提供する必要があります。この要件に最適なDatabricksの機能はどれですか?",
        options: [
            "(A) Delta Lake",
            "(B) Databricks Jobs (Databricks ワークフロー)",
            "(C) MLflow",
            "(D) DBFS (Databricks File System)"
        ],
        answerIndex: 1,
        explanation: "(B) 複数のノートブックやタスクをシーケンシャル/並列にオーケストレーションし、スケジュール実行、リトライ制御、失敗時の通知・監視を提供するDatabricksの標準機能は「Databricks Jobs（ワークフロー）」です。\n(A) Delta Lakeはストレージフォーマットです。\n(C) MLflowは機械学習の実験管理・モデル管理ツールです。\n(D) DBFSは分配送信ファイルシステムです。"
    },
    {
        category: "Databricks Compute / Architecture",
        question: "問題 113:\nデータエンジニアは、管理されたUnity Catalogテーブルに対して、一日を通してアドホックで高並列性のSQLクエリを実行する数百人のビジネスユーザー向けに、セルフサービスBIダッシュボードをサポートする必要があります。ほぼ瞬時の起動、手動調整不要の自動スケーリング、そして運用オーバーヘッドを最小限に抑えつつ最高のSQLパフォーマンスを必要とする場合、どのコンピューティングを使用すべきでしょうか?",
        options: [
            "(A) 固定クラスターサイズの SQL Warehouse (Classic)",
            "(B) ダッシュボードによってスケジュールに基づいてトリガーされるジョブクラスター",
            "(C) 手動オートスケーリングが有効になっている汎用 (All-Purpose) クラスター",
            "(D) Photonが有効になっている SQL Warehouse (Serverless)"
        ],
        answerIndex: 3,
        explanation: "(D) 数百人のユーザーからの高並列アクセス、ほぼ即時の起動、手動管理不要の自動スケーリング、最高のクエリパフォーマンス（Photonエンジン）をすべて満たす最適なコンピューティング環境は「SQL Warehouse (Serverless)」です。"
    },
    {
        category: "Unity Catalog / Data Governance",
        question: "問題 114:\nデータエンジニアは、オンプレミスのPostgreSQLデータベースの販売データとAzure Synapseの顧客データを統合して、包括的なレポートを作成する必要があります。データの重複コピーを避け、常に最新情報を直接参照したいと考えています。Databricksを使用してこれを実現する最も適切な方法はどれですか?",
        options: [
            "(A) 両方のソースからデータをCSVファイルにエクスポートし、Databricksにアップロードする。",
            "(B) Lakehouse Federation (レイクハウス・フェデレーション) を使用して、両方のデータソースを直接クエリする。",
            "(C) 両方のソースからのデータを手動で同期して単一のデータベースに格納する。",
            "(D) Databricksにデータを取り込むためのカスタムETLパイプラインを開発する。"
        ],
        answerIndex: 1,
        explanation: "(B) 「Lakehouse Federation」機能を使用すると、外部のデータベース（PostgreSQLやAzure Synapseなど）のデータをDatabricks内に複製・取り込みすることなく、Unity Catalog経由で仮想的に直接クエリ（フェデレーションクエリ）できます。データ重複を防ぎ最新情報を参照する要件に完璧に合致します。"
    },
    {
        category: "Unity Catalog / Data Governance",
        question: "問題 115:\nデータエンジニアは、データパイプラインの一部として Delta テーブルを使用する必要がありますが、そのテーブルに対する適切なアクセス権限があるかどうかがわかりません。データエンジニアがテーブルに対する権限を確認できるUI上の場所は次のどれですか?",
        options: [
            "(A) Jobs (ジョブ)",
            "(B) Catalog Explorer (データエクスプローラー)",
            "(C) REST API",
            "(D) Dashboards (ダッシュボード)",
            "(E) DBFS (Databricks File System)"
        ],
        answerIndex: 1,
        explanation: "(B) Databricks UIの「Catalog Explorer（旧: Data Explorer）」を使用すると、カタログ、スキーマ、テーブルの構造をブラウズできるだけでなく、「Permissions（権限）」タブを開くことで、自分がそのテーブルに対して持っている特権（SELECT, MODIFY等）を確認・管理できます。"
    },
    {
        category: "PySpark / Spark SQL",
        question: "問題 116:\nデータエンジニアは、テーブル内の文字列型の列 city に対してカスタムロジックを適用したいと考えています。このロジックをSQLクエリ内で再利用・スケールさせるために、SQLのユーザー定義関数 (UDF) を作成したいと考えています。正しい作成構文は次のどれですか?",
        options: [
            "(A) CREATE UDF combine_nyc (city STRING) RETURNS STRING ...",
            "(B) CREATE FUNCTION combine_nyc (city STRING) RETURNS STRING RETURN CASE WHEN city = 'brooklyn' THEN 'new york' ELSE city END;",
            "(C) CREATE FUNCTION combine_nyc (city STRING) RETURN CASE ...",
            "(D) CREATE UDF combine_nyc (city STRING) RETURNS STRING ...",
            "(E) CREATE UDF combine_nyc (city STRING) RETURN CASE ..."
        ],
        answerIndex: 1,
        explanation: "(B) Spark SQLにおいてスカラーユーザー定義関数（UDF）を作成する正しいSQL構文は CREATE FUNCTION 関数名 (引数 型) RETURNS 戻り値型 RETURN 式; です。キーワードは CREATE FUNCTION であり、RETURNS で型を指定した上で RETURN 句に処理内容を記述します。CREATE UDF という構文は標準SQL/Spark SQLには存在しません。"
    },
    {
        category: "Databricks Jobs / Workflows",
        question: "問題 117:\nDatabricksワークフローがノートブックのエラーにより最終段階のタスクで失敗しました。このワークフローは毎日実行されており、非常にコストと時間がかかります。データエンジニアはエラーを修正した後にパイプラインを再実行したいと考えています。ダウンタイムとコスト（計算リソース）を最小限に抑えるために、どのような対策を講じるべきでしょうか?",
        options: [
            "(A) ワークフロー全体を最初から再実行する。",
            "(B) 失敗したタスク以降のみを「修復して実行 (Repair and Run / 修理実行)」する。",
            "(C) クラスターを再起動してから全体を実行する。",
            "(D) 別のクラスターに切り替えて全体を実行する。"
        ],
        answerIndex: 1,
        explanation: "(B) Databricks Jobsの「Repair and Run（修復して実行）」機能を使用すると、すでに正常に完了した前段の重いタスクを再実行することなく、失敗したタスクおよびその下流のタスクのみを選択して再実行できます。これにより時間とコンピュートコストを劇的に節約できます。"
    },
    {
        category: "PySpark / Spark SQL",
        question: "問題 118:\nデータエンジニアは、既存のデータを保持したまま、既存のDeltaテーブルに新しいレコードを追加する必要があります。データ取り込みパイプラインは1時間ごとに実行され、以前のレコードを置き換えることなく増分データを追加します。どの書き込みモード (SaveMode) を使用すべきでしょうか?",
        options: [
            "(A) Append (追加)",
            "(B) Overwrite (上書き)",
            "(C) ErrorIfExists (エラーが存在する場合)",
            "(D) Ignore (無視)"
        ],
        answerIndex: 0,
        explanation: "(A) 既存のデータを削除・上書きすることなく、新しいデータを末尾に追加し続けるためのSparkの書き込みモードは Append です。"
    },
    {
        category: "Delta Lake",
        question: "問題 119:\nデータエンジニアがDeltaテーブルに対してDatabricksの OPTIMIZE コマンドを使用しています。同じテーブルで同じデータに対して OPTIMIZE コマンドを2回連続で実行するとどうなりますか?",
        options: [
            "(A) 冪等性 (Idempotency) を持つため、2回目の実行では何も処理されず効果・変化はない。",
            "(B) ファイルあたりのレコード数を大幅に変更する。",
            "(C) データを再クラスタリングすることで、ファイルサイズをさらに縮小する。",
            "(D) 完全なリキッドクラスタリング処理を強制発動させる。"
        ],
        answerIndex: 0,
        explanation: "(A) OPTIMIZE コマンドは「冪等性（べきとうせい）」を備えています。すでに適切なファイルサイズに圧縮・最適化されたデータに対して再度実行しても、新たな圧縮対象ファイルが存在しないため、何の変化も起きず無駄な再処理は行われません。"
    },
    {
        category: "PySpark / Spark SQL",
        question: "問題 120:\nデータエンジニアは、外部の SQLite データベースのデータを使用して、Databricks に JDBC テーブルを作成する必要があります。次のコマンドの空白を埋める正しい選択肢はどれですか?\nCREATE TABLE jdbc_customer360 USING [          ] OPTIONS (url \"jdbc:sqlite:/customers.db\", dbtable \"customer360\")",
        options: [
            "(A) delta",
            "(B) sqlite",
            "(C) org.apache.spark.sql.jdbc (または単に jdbc)",
            "(D) org.apache.spark.sql.sqlite",
            "(E) cloudFiles"
        ],
        answerIndex: 2,
        explanation: "(C) Spark SQLでJDBCデータソース経由で外部データベースにアクセスするテーブルを作成する場合、USING 句には jdbc（または完全修飾クラス名 org.apache.spark.sql.jdbc）を指定します。"
    },
    {
        category: "Databricks Compute / Architecture",
        question: "問題 121:\nPythonファイルが本番環境に移行する準備が整い、クライアントは最も安価で効率的なクラスタータイプを使用したいと考えています。ワークロードは非常に小さく、処理するデータは10GBのみで、単純な結合処理のみを行い、複雑な集計や大規模な変換処理は行いません。この要件を満たすクラスターはどれでしょうか?",
        options: [
            "(A) All-Purposeクラスター (対話型クラスター)",
            "(B) スポットインスタンスが有効になっている ジョブクラスター (Job Cluster)",
            "(C) スポットインスタンスが無効になっている ジョブクラスター",
            "(D) Photonが有効になっている ジョブクラスター"
        ],
        answerIndex: 1,
        explanation: "(B) 本番環境の自動化ワークロードには単価の安価なジョブクラスターが適しています。さらに、処理が単純でコスト効率が最優先の要件であるため、「スポットインスタンス」を有効にすることでクラウドの余剰コンピュートを最小コストで利用するのが最適なソリューションです。"
    },
    {
        category: "PySpark / Spark SQL",
        question: "問題 122:\nグローバル小売企業は、複数のカテゴリーと地域にわたる製品を販売しています。営業チームはデータエンジニアに sales_df という名前の PySpark DataFrame を提供しました。\nデータ構造 (sales_df):\n| product_id | category    | sales_amount | region |\n| 1          | Electronics | 100          | North  |\n| 2          | Clothing    | 200          | South  |\n\n各製品カテゴリの総売上高を計算し、その結果を category_sales という名前の新しい DataFrame に格納します。期待される結果 (category_sales) を生成するコードはどれですか?\n| category    | total_sales_amount |\n| Electronics | 500                |\n| Clothing    | 900                |",
        options: [
            "(A) category_sales = sales_df.groupBy(\"category\").agg(sum(\"sales_amount\").alias(\"total_sales_amount\"))",
            "(B) category_sales = sales_df.sum(\"sales_amount\").groupBy(\"category\").alias(\"total_sales_amount\")",
            "(C) category_sales = sales_df.agg(sum(\"sales_amount\").groupBy(\"category\").alias(\"total_sales_amount\"))",
            "(D) category_sales = sales_df.groupBy(\"region\").agg(sum(\"sales_amount\").alias(\"total_sales_amount\"))"
        ],
        answerIndex: 0,
        explanation: "(A) PySparkにおいて、指定した列（\"category\"）でグループ化し、集計関数（sum(\"sales_amount\")）を適用してエイリアス（total_sales_amount）を付与する正しく推奨される構文です。\n(D) グループ化の対象が \"region\" になってしまっており、カテゴリー別の集計になりません。"
    },
    {
        category: "Databricks Compute / Architecture",
        question: "問題 123:\nデータエンジニアがDatabricks Spark UIで処理が遅いステージを調査しています。エンジニアはタスク実行時間のサマリーメトリクスセクションを確認し、以下の情報を見つけました:\n- 25パーセンタイル持続時間: 40秒\n- 平均持続時間: 45秒\n- 75パーセンタイル持続時間: 50秒\n- 最大持続時間: 80秒\nこれらの指標はどのように解釈すればよいでしょうか?",
        options: [
            "(A) GC (ガベージコレクション) の問題が発生している。",
            "(B) このステージではデータスキュー (データの偏り) が発生しているわけではなく、正常に均等分散されている。",
            "(C) ステージは健全 (正常) である。",
            "(D) クラスターのリソースが不十分である。"
        ],
        answerIndex: 2,
        explanation: "(C) タスクの実行時間において、25パーセンタイル（40秒）から75パーセンタイル（50秒）、最大値（80秒）までの差が小さく揃っている場合、各タスクにデータが均等に分配されて処理されていることを示します（データの偏り/スキューがない健全な状態です）。"
    },
    {
        category: "Unity Catalog / Data Governance",
        question: "問題 124:\nデータエンジニアが、Unity Catalogの2つのテーブル、main.sales.managed_orders (管理対象テーブル) と main.sales.ext_orders (外部テーブル) に対して DROP TABLE を実行します。クラウドストレージ上の基となるデータファイルはどうなりますか?",
        options: [
            "(A) 両方のテーブルのファイルが削除される。",
            "(B) 両方のテーブルのファイルが保持される。",
            "(C) 管理対象テーブルのファイルは削除され、外部テーブルのファイルは保持される。",
            "(D) 管理対象テーブルのファイルは保持され、外部テーブルのファイルは削除される。"
        ],
        answerIndex: 2,
        explanation: "(C) Unity Catalogにおける動作として、管理対象テーブル (Managed Table) を削除するとメタデータとストレージ上の実データファイルの両方が削除されます。一方、外部テーブル (External Table) を削除した場合はメタデータ（カタログ登録）のみが削除され、物理ファイルはストレージ上にそのまま保持されます。"
    },
    {
        category: "Delta Live Tables",
        question: "問題 125:\nデータセットが Delta Live Tables (DLT) を使用して定義されており、以下の期待値句 (Expectation) が含まれています。\nCONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION DROP ROW\nこれらの制約に違反するデータバッチが処理された場合、どのような動作が想定されますか?",
        options: [
            "(A) 期待値に違反するレコードはターゲットデータセットから削除 (ドロップ) され、イベントログに無効として記録される。",
            "(B) 期待値に違反するレコードはターゲットデータセットに追加され、イベントログに無効として記録される。",
            "(C) 期待値に違反するレコードはターゲットデータセットから削除され、隔離テーブルにロードされる。",
            "(D) 期待値に違反するレコードがあると、ジョブ（パイプライン）は失敗する。"
        ],
        answerIndex: 0,
        explanation: "(A) ON VIOLATION DROP ROW が指定されている場合、条件を満たさない不適合レコードはターゲットテーブルへ書き込まれずに破棄（ドロップ）され、その発生状況がDLTのイベントログに記録されます。"
    },
    {
        category: "Unity Catalog / Data Governance",
        question: "問題 126:\nDatabricksとUnity Catalogを使用している企業のデータエンジニアが、同じくUnity Catalogに対応したDatabricksワークスペースを使用している外部パートナーとテーブルコレクションを共有する必要があります。データエンジニアはDelta Sharingを使用することにしました。Delta Sharing（Databricks-to-Databricks共有）を設定するために、データエンジニアが外部パートナーに最初に要求すべき情報は何ですか?",
        options: [
            "(A) DatabricksワークスペースのIPアドレス",
            "(B) Databricksクラスターの名前",
            "(C) Partner (Recipient) の Unity Catalog メタストア識別子 (Sharing Identifier)",
            "(D) 相手のDatabricksアカウントのパスワード"
        ],
        answerIndex: 2,
        explanation: "(C) Databricks相互のDelta Sharingでは、受領者（Recipient）を登録するために相手側のUnity Catalogメタストア固有の「Sharing Identifier（共有識別子）」を教えてもらう必要があります。これによりトークンの手動交換なしで安全に共有が確立できます。"
    },
    {
        category: "Delta Live Tables",
        question: "問題 127:\nDelta Live Tables (DLT) パイプラインが「継続 (Continuous)」モードかつ「開発 (Development)」モードで実行されています。以前に処理されていない新しいデータが存在し、すべての定義が有効であると仮定した場合、[開始 (Start)] をクリックしてパイプラインを更新した後の予想される動作はどうなりますか?",
        options: [
            "(A) パイプラインが手動で停止されるまで、すべてのデータセットは最新データを監視して設定間隔で更新し続け、コンピューティングリソース（クラスター）も保持され続ける。",
            "(B) すべてのデータセットが一度更新された後、パイプラインはシャットダウンし、クラスターは自動終了する。",
            "(C) すべてのデータセットが一度更新され、パイプラインは停止するが、追加開発のためにコンピューティングリソースは保持される。",
            "(D) パイプラインは一度だけ実行されて自動破棄される。"
        ],
        answerIndex: 0,
        explanation: "(A) 「継続 (Continuous)」パイプラインモードでは、データソースをインクリメンタルに監視し続けてデータが届くたびに処理を行います。そのため、明示的にパイプラインを停止（Stop）するまでクラスター等のコンピューティングリソースは保持され動的に更新処理を継続します。"
    },
    {
        category: "Databricks Jobs / Workflows",
        question: "問題 128:\nマルチタスクジョブの実行が失敗した後、データエンジニアはクラスター設定を変更し、1つのタスクのノートブックパスを修正しました。失敗またはスキップされたタスクのみを更新された設定で再実行し、過去の実行履歴を同一コンテキスト内で保持したいと考えています。どの機能・戦略を用いるべきでしょうか?",
        options: [
            "(A) Jobs UI または REST API の「修復して実行 (Repair and Run)」機能を使用して失敗したタスクを再実行する。",
            "(B) タスクの再試行回数を増やし、「再試行」をクリックする。",
            "(C) ジョブを Databricks Asset Bundles (DABs) としてエクスポートして再デプロイする。",
            "(D) 「今すぐ実行 (Run Now)」で新しい実行を開始する。"
        ],
        answerIndex: 0,
        explanation: "(A) 「Repair and Run（修復して実行）」機能は、失敗・スキップされたタスクのみをピンポイントで再実行できる機能です。更新されたタスク設定（クラスターやノートブックパスの変更など）を適用しながら、既存の実行履歴（Run History）内に結果を記録できます。"
    },
    {
        category: "Structured Streaming / Auto Loader",
        question: "問題 129:\nデータエンジニアは、クラウドストレージに毎時間アップロードされる数千もの新しいJSONファイルを段階的 (インクリメンタル) にロードする必要があります。実行ごとにディレクトリ全体をスキャンすることなく、処理済みファイルを追跡し、将来的に数百万ファイル規模まで対応できる拡張性のあるソリューションはどれですか?",
        options: [
            "(A) ディレクトリ全体に対して spark.read.json() を使用し、1時間ごとにターゲットテーブルを上書きする。",
            "(B) cloudFiles.format を json に設定し、チェックポイント位置 (checkpointLocation) を指定して Auto Loader を使用する。",
            "(C) COPY INTO を FORCE=true オプションで実行する。",
            "(D) 毎晩 MERGE INTO を手動パスリストから実行する。"
        ],
        answerIndex: 1,
        explanation: "(B) 数百万ファイル規模のクラウドストレージから新しく追加されたファイルのみを効率的に検知・追跡してロードするのに最適な機能は「Auto Loader (format(\"cloudFiles\"))」です。チェックポイントを用いて状態を保持するため、ファイル一覧のディレクトリ再検索（ディレクトリスキャン）を回避できます。"
    },
    {
        category: "Databricks Jobs / Workflows",
        question: "問題 130:\nデータエンジニアには複雑な実行スケジュールを持つジョブがあり、そのスケジュール設定をプログラムや構成ファイル経由で別のジョブに定義・送信したいと考えています。スケジュールの時間指定を標準的な文字列として表現するために使用する形式・構文はどれですか?",
        options: [
            "(A) プログラムで表現して送信する方法はない",
            "(B) pyspark.sql.types.DateType",
            "(C) datetime モジュール",
            "(D) pyspark.sql.types.TimestampType",
            "(E) Cron 構文 (Cron Expression)"
        ],
        answerIndex: 4,
        explanation: "(E) Databricks Jobs や Asset Bundles において、複雑な繰り返しスケジュール（例: 「毎週日曜日の午前2時」など）をプログラムや記述ファイル上で柔軟に定義するために広く使用されている業界標準の文法は「Cron 構文」です。"
    },
    {
        category: "Databricks Asset Bundles / Repos",
        question: "問題 131:\nデータエンジニアリングチームは、Databricks Asset Bundles (DABs) を使用して、開発、テスト、本番環境に同じコードベースをデプロイしています。チームは、プロモーション（環境移行）中にノートブック、ジョブ定義、デプロイロジックを変更することなく、バンドル構成のみを通じて環境固有の動作を適用したいと考えています。この要件を満たしつつ、環境固有の構成を適用するアプローチはどれでしょうか?",
        options: [
            "(A) 環境ごとに別々の Gitブランチを使用することで、各ブランチに環境固有の設定値を含めることができます。",
            "(B) バンドル変数を定義し、バンドルリソースからそれらを参照し、バンドルターゲット (Targets) を使用して環境ごとに変数の値を上書きします。",
            "(C) ノートブック内で環境固有の値をパラメータ化し、各ジョブ実行がトリガーされたときにそれらのパラメータを設定します。",
            "(D) 同じバンドルを一度デプロイし、デプロイ後に各環境のワークスペースUIでジョブ設定を編集します。"
        ],
        answerIndex: 1,
        explanation: "(B) Databricks Asset Bundlesのベストプラクティスでは、環境（dev, staging, prodなど）ごとの違いを databricks.yml 内の targets セクションで変数を上書き定義することで吸収します。これにより、コードベース自体を変更することなく、環境に応じた設定をシームレスに適用できます。"
    },
    {
        category: "PySpark / Spark SQL",
        question: "問題 132:\nデータエンジニアが、同じスキーマを持つ2つのデータセットを結合し、一方のデータセットから行をもう一方のデータセットに追加（縦に結合）したいと考えています。この行単位の結合を実行するSpark DataFrame操作はどれですか?",
        options: [
            "(A) join (結合)",
            "(B) append (追加)",
            "(C) union (ユニオン)",
            "(D) crossJoin (クロス結合 / 横断)"
        ],
        answerIndex: 2,
        explanation: "(C) 同じスキーマを持つ2つのDataFrameの「行」を縦に結合して1つのデータセットにするための正しいPySparkメソッドは union() または unionByName() です。\n(A) join() はキーに基づいて「列」を横に結合する操作です。\n(B) append はリスト操作や書き込みモード名であり、DataFrame同士の結合メソッドではありません。"
    },
    {
        category: "Structured Streaming / Auto Loader",
        question: "問題 133:\nデータエンジニアが、クラウドストレージに届いたJSONファイルを読み込むストリーミングパイプラインを構築しています。このパイプラインは、新しいファイルが到着するたびに、手動操作なしで自動的に処理する必要があります。このユースケースに適したDatabricksの機能はどれですか?",
        options: [
            "(A) Auto Loader (オートローダー) と Structured Streaming",
            "(B) Delta Lakeのタイムトラベル",
            "(C) Spark Cache",
            "(D) ブロードキャスト結合 (Broadcast Join)"
        ],
        answerIndex: 0,
        explanation: "(A) クラウドストレージ（S3やADLSなど）に継続的に到着する新しいファイルを自動検知し、ストリーミング（またはバッチ）としてインクリメンタルに処理・取り込むための最適な機能が Databricks Auto Loader です。"
    },
    {
        category: "PySpark / Spark SQL",
        question: "問題 134:\nデータエンジニアは、同じ Spark セッション内で使用する中間データを一時ビューに保存したいと考えています。セッション終了後、データは保持されないようにする必要があります。どの Spark SQL コマンドを使用すればよいでしょうか?",
        options: [
            "(A) CREATE DATABASE",
            "(B) CREATE TEMPORARY VIEW",
            "(C) CREATE TABLE",
            "(D) CREATE VIEW"
        ],
        answerIndex: 1,
        explanation: "(B) 現在のSparkセッション内でのみアクセス可能で、セッション終了時（クラスター再起動やノートブックのデタッチなど）に自動的に破棄される一時的なテーブル（ビュー）を作成するSQLコマンドは CREATE TEMPORARY VIEW または CREATE TEMP VIEW です。"
    },
    {
        category: "Medallion Architecture",
        question: "問題 135:\nオープンソーステクノロジーを採用した Databricks Lakehouse プラットフォームの利点は次のどれですか?",
        options: [
            "(A) ワークロードをスケーリングする能力",
            "(B) ストレージの拡張性",
            "(C) クラウド固有の統合",
            "(D) 簡素化されたガバナンス",
            "(E) ベンダーロックインの回避"
        ],
        answerIndex: 4,
        explanation: "(E) Databricksは、Apache Spark、Delta Lake、MLflowなどの強力な「オープンソースソフトウェア (OSS)」を中核技術として採用しています。オープンソースフォーマット（Parquet/Delta）で自社のクラウドアカウント内のストレージにデータが保存されるため、特定のベンダー（プラットフォーム）にデータを囲い込まれる「ベンダーロックイン」を回避できるのが最大の利点の1つです。"
    },
    {
        category: "Structured Streaming / Auto Loader",
        question: "問題 136:\nデータエンジニアリングチームは、既に50,000個のCSVファイルが格納されているクラウドストレージから過去のファイルを取り込み、さらに継続的に到着する新規ファイルも処理する必要があります。Auto Loaderを使用して既存と新規の両方のファイルを効率的に増分処理したい場合、どのモードを設定すべきでしょうか?",
        options: [
            "(A) ファイル通知 (File Notification) モードを使用する。ディレクトリスキャンではなくクラウドストレージのイベントを使用することで、大量の既存ファイルと継続的な新規ファイルの両方に効率的にスケールする。",
            "(B) ディレクトリ一覧 (Directory Listing) モードを使用する。",
            "(C) 最初はディレクトリ一覧モードを使用し、その後ストリームを再構成してファイル通知モードを使用する。",
            "(D) 既存のファイルがすべて処理された後にのみファイル通知モードを使用する。"
        ],
        answerIndex: 0,
        explanation: "(A) 50,000個（大量）の既存ファイルがあり、継続的な新規追加がある場合、APIでディレクトリ全体を毎回走査する「ディレクトリ一覧モード」はパフォーマンスが低下します。クラウドプロバイダーのイベントキュー（AWS SQS/EventBridgeやAzure Event Gridなど）を利用して新しいファイルの到着通知だけを受け取る「ファイル通知モード (File Notification mode)」を使用するのが、最もスケーラブルで高効率なベストプラクティスです。"
    },
    {
        category: "Unity Catalog / Data Governance",
        question: "問題 137:\n新しいデータエンジニアリングチームがELTプロジェクトに割り当てられました。このチーム（グループ名 `team`）には、プロジェクトを完全に管理するために `sales` テーブルに対する完全な権限が必要です。チームにテーブルに対するすべての権限を一括で付与するには、次のどのSQLコマンドを使用できますか?",
        options: [
            "(A) GRANT ALL PRIVILEGES OF TABLE team TO sales;",
            "(B) GRANT SELECT ON TABLE sales TO team;",
            "(C) GRANT USAGE ON TABLE sales TO team;",
            "(D) GRANT SELECT, CREATE, MODIFY ON TABLE sales TO team;",
            "(E) GRANT ALL PRIVILEGES ON TABLE sales TO team;"
        ],
        answerIndex: 4,
        explanation: "(E) Unity Catalogにおいて、特定のオブジェクト（ここではテーブル）に対する「すべて」の権限を指定のプリンシパル（グループやユーザー）に付与するための正しい標準SQL構文は GRANT ALL PRIVILEGES ON <オブジェクトタイプ> <オブジェクト名> TO <プリンシパル>; です。"
    },
    {
        category: "Databricks Workspace",
        question: "問題 138:\nデータエンジニアがDatabricksノートブックを使用してデータパイプラインを実装しています。エンジニアは、ジョブ内の複数のタスク間でファイルパスや処理日などのパラメータを共有したいと考えています。Databricksのどのユーティリティでパラメータの受け渡しが可能になりますか?",
        options: [
            "(A) display",
            "(B) spark.conf",
            "(C) dbutils.widgets (または dbutils.jobs.taskValues)",
            "(D) dbutils.fs"
        ],
        answerIndex: 2,
        explanation: "(C) ノートブック間で値を設定・取得するための標準的なDatabricksユーティリティは dbutils.widgets です。また、Databricks Jobsのタスク間で動的に値を引き継ぐ場合は dbutils.jobs.taskValues が使用されます。\n(D) dbutils.fs はファイルシステムの操作ユーティリティです。"
    },
    {
        category: "Structured Streaming / Auto Loader",
        question: "問題 139:\nデータエンジニアが外部テーブル (External Table) を管理対象テーブル (Managed Table) に変換しました。このテーブルからデータを読み取る構造化ストリーミングジョブは、変換中も実行され続けていましたが、変換が完了するとストリーミングジョブが新しいレコードの処理を停止してしまいました。データエンジニアはこの問題をどのように解決すべきでしょうか?",
        options: [
            "(A) 新しい管理ストレージの場所に対してストリーミングジョブに追加の権限を付与する。",
            "(B) ストリーミングジョブを再起動して、新しい管理対象テーブルの場所を認識させる。",
            "(C) 変換されたテーブルに対して REFRESH TABLE を実行し、ストリーミングチェックポイントを更新する。",
            "(D) ストリーミングチェックポイントディレクトリを完全に削除し、ジョブを最初から再処理する。"
        ],
        answerIndex: 1,
        explanation: "(B) 構造化ストリーミング（Structured Streaming）のマイクロバッチ処理は、ソーステーブルのメタデータや物理的なパスの変更を動的に検知できません。外部テーブルから管理対象テーブルへ変換（実データの場所が移動）した場合、ジョブを一度停止して「再起動」し、新しいテーブルの場所をドライバーに認識させる必要があります。（チェックポイント自体は論理的なオフセットを保持しているため再利用可能です）。"
    },
    {
        category: "Databricks Compute / Architecture",
        question: "問題 140:\nデータエンジニアが個人のノートパソコンで作業しており、クラウドストレージ上のDelta Lakeに保存されているデータに対して複雑な変換処理を実行する必要があります。エンジニアはDatabricks Connectを使用してDatabricksクラスターと連携し、ローカルIDEで作業することにしました。Databricks Connectは、エンジニアがDatabricksクラスターと連携しながら、ローカルマシン上でコードの開発、テスト、デバッグをシームレスに行えるようにするために、どのような仕組みを提供しているのでしょうか?",
        options: [
            "(A) Databricksランタイムを模倣したローカル環境を提供することで、指定された特定のIDEを使用させる。",
            "(B) Databricksランタイムを模倣したローカル環境を提供し、Webインターフェースのみを介して開発を行わせる。",
            "(C) ネットワーク接続を必要とせずにローカルマシンからSparkジョブを直接実行できるようにする。",
            "(D) Databricksクラスターへのリモートプロキシ通信を提供し、エンジニアが好みのローカルIDEを使用してコードの開発、テスト、デバッグを行えるようにする。"
        ],
        answerIndex: 3,
        explanation: "(D) Databricks Connectの仕組みは、「ローカルマシン上にクラスターを模倣・エミュレートする」のではなく、ローカルのVS CodeやPyCharmといった「好みのIDE」から、リモートで稼働している実際のDatabricksクラスターにSparkコマンド（プロキシ通信）を送信し、重い分散処理はクラウド上のクラスターで実行させるアーキテクチャです。"
    },
    {
        category: "Unity Catalog / Data Governance",
        question: "問題 141:\nデータエンジニアがSpark SQLテーブル `my_table` を削除しようとしています。データエンジニアは、テーブルのメタデータと実データの両方をすべて削除したいと考えています。次のコマンドを実行しました。\n`DROP TABLE IF EXISTS my_table;`\n`SHOW TABLES` を実行してもオブジェクトは表示されなくなりましたが、クラウドストレージ上のデータファイルは引き続き存在しています。データファイルがまだ存在し、メタデータファイルのみが削除された理由を説明するのは次のどれですか?",
        options: [
            "(A) テーブルのデータが10GBを超えていたため。",
            "(B) テーブルが外部テーブル (External Table) であったため。",
            "(C) テーブルに場所 (LOCATION) が指定されていなかったため。",
            "(D) テーブルのデータが10GB未満であったため。",
            "(E) テーブルが管理対象テーブル (Managed Table) であったため。"
        ],
        answerIndex: 1,
        explanation: "(B) Databricks/Spark SQLにおいて、外部テーブル (External Table: LOCATION句を指定して作成されたテーブル) を DROP TABLE した場合、メタデータストア（カタログ）からの登録のみが削除され、物理的なデータファイルはクラウドストレージ上に残ります。実データも一緒に削除されるのは管理対象テーブル (Managed Table) の場合です。"
    },
    {
        category: "Unity Catalog / Data Governance",
        question: "問題 142:\nワークスペースで使用されているデータソースとテーブルの関係（依存関係）を確認するには、Databricksのどの機能を使用できますか?",
        options: [
            "(A) リネージ (Data Lineage) 機能を使用して、レポート内でのみテーブルが使用されている箇所を強調表示するグラフを視覚化する。",
            "(B) リネージ機能を使用して、ノートブック内でのみテーブルが使用されている箇所を強調表示するグラフを視覚化する。",
            "(C) リネージ機能を使用して、ノートブック、他のテーブル、ダッシュボード/レポートなどでテーブルが使用されている場所など、すべての依存関係を示すグラフを視覚化する。",
            "(D) 過去3か月のアクティビティのみを追跡し、依存関係の詳細を完全に提供しないため、リネージ機能を使用しない。"
        ],
        answerIndex: 2,
        explanation: "(C) Unity Catalogの「データリネージ (Data Lineage)」機能は、テーブル、ノートブック、ジョブ、ダッシュボードなど、データがどこから来てどこへ流れていくかの完全な依存関係（上流・下流）をインタラクティブなグラフとして可視化する機能です。特定の要素だけでなくすべての依存関係を網羅します。"
    },
    {
        category: "Delta Lake",
        question: "問題 143:\nデータエンジニアは、更新と削除操作を何度か繰り返した後、参照されなくなった古いデータファイルを含むDeltaテーブルを持っています。これらの未使用ファイルを物理的に削除してストレージ領域を解放するには、どのDelta Lakeコマンドを実行すればよいでしょうか?",
        options: [
            "(A) CACHE TABLE",
            "(B) DESCRIBE HISTORY (履歴の確認)",
            "(C) OPTIMIZE (最適化)",
            "(D) VACUUM (バキューム)"
        ],
        answerIndex: 3,
        explanation: "(D) Delta Lakeにおいて、更新や削除によって論理的に削除され、参照されなくなった古い履歴ファイル（デフォルトで7日以上経過したもの）を物理的なストレージから削除してコストを削減するコマンドは VACUUM です。OPTIMIZE はファイルの圧縮（コンパクション）であり、物理削除は行いません。"
    },
    {
        category: "Medallion Architecture",
        question: "問題 144:\nデータエンジニアリングチームは、3つのエンタープライズソース (SQLデータベース、S3、Kafkaストリーム) から顧客のトランザクションデータをUnity Catalogテーブルに取り込みます。データはリネージ（系統）を維持し、履歴スナップショットを必要とするコンプライアンス監査に対応する必要があります。ガバナンスと監査の両方の要件を満たす Lakeflow Connect (または一般的な取り込み) 構成はどれでしょうか?",
        options: [
            "(A) ストレージコストを削減するために、3つのソースすべてを備えた単一の Lakeflow コネクタ、直接 Delta 書き込み、およびテーブルバージョン管理の無効化。",
            "(B) CDC (変更データキャプチャ) を使用したソースごとの個別のコネクタ、ソースごとの個別のUnity Catalogスキーマ、および監査コンプライアンスのためのテーブルバージョン管理 (Delta Lake) が有効になっている構成。",
            "(C) フルロード同期のみ、履歴データのアーカイブ、監査クエリ用の外部テーブルを備えた個別のコネクタ。",
            "(D) バッチスケジューリング、共有Unity Catalogスキーマ、外部に保存される増分スナップショットを備えた単一のコネクタ。"
        ],
        answerIndex: 1,
        explanation: "(B) 監査コンプライアンス（履歴スナップショットの維持）とガバナンス（リネージの維持）を満たすためには、ソースごとに個別のコネクタとスキーマを分けて管理し、CDCを用いて変更履歴を正確に取り込み、Delta Lakeのバージョン管理（タイムトラベル）を有効にしたまま維持する構成がベストプラクティスです。バージョン管理の無効化（A）やフルロード同期（C）は要件を満たしません。"
    },
    {
        category: "PySpark / Spark SQL",
        question: "問題 145:\nある企業は、複数のカテゴリーと地域にわたって製品を販売しています。営業チームは、以下のような sales_df という名前の PySpark DataFrame を提供しました。\n| product_id | category    | sales_amount | region |\n| 1          | Electronics | 100          | North  |\n| 2          | Clothing    | 200          | South  |\n\n各地域 (region) ごとの総売上高を計算し、その結果を region_sales という名前の新しい DataFrame に格納します。\nどのコードが期待通りの結果を生成しますか?",
        options: [
            "(A) region_sales = sales_df.groupBy(\"category\").sum(\"sales_amount\").alias(\"total_sales_amount\")",
            "(B) region_sales = sales_df.groupBy(\"region\").agg(sum(\"sales_amount\").alias(\"total_sales_amount\"))",
            "(C) region_sales = sales_df.sum(\"sales_amount\").groupBy(\"region\").alias(\"total_sales_amount\")",
            "(D) region_sales = sales_df.agg(sum(\"sales_amount\").groupBy(\"region\").alias(\"total_sales_amount\"))"
        ],
        answerIndex: 1,
        explanation: "(B) 「地域 (region) ごと」に集計を行うため、groupBy(\"region\") を使用するのが正解です。また、PySparkで集計結果の列名を変更（エイリアス）するには agg() を使用して sum(...).alias(...) とする構文が正確です。"
    },
    {
        category: "Structured Streaming / Auto Loader",
        question: "問題 146:\nデータエンジニアは、Auto Loaderを使用してJSONソースからデータを取り込むパイプラインを開発しましたが、型推論やスキーマヒントを一切提供しませんでした。ターゲットテーブル内の一部のフィールドは浮動小数点値やブール値しか含まれていないにもかかわらず、すべての列が「文字列 (String) 型」になっていることに気付きました。\nAuto Loaderがすべての列を文字列型であると推測した理由を説明するのは次のどれですか?",
        options: [
            "(A) Auto Loaderは取り込まれたデータのスキーマを自動で推論することができない。",
            "(B) JSONデータ形式はテキストベースの形式であり、デフォルトの推論では文字列として読み込まれるため。",
            "(C) 特定のスキーマと推論されたスキーマの間に型の不一致があったため。",
            "(D) すべてのフィールドに少なくとも1つのNULL値が含まれていたため。",
            "(E) Auto Loaderは文字列データでのみ動作する機能であるため。"
        ],
        answerIndex: 1,
        explanation: "(B) JSONはテキストベースのフォーマットであり、Auto Loader (cloudFiles) のデフォルトの動作として、スキーマの不一致によるデータの欠落（データロス）を防ぐために、すべての列を最も安全な「文字列 (String) 型」として推論して取り込みます。正確なデータ型（IntやBoolean等）を適用したい場合は、スキーマヒントや cloudFiles.inferColumnTypes = true の設定が必要です。"
    },
    {
        category: "Databricks Asset Bundles / Repos",
        question: "問題 147:\nデータエンジニアリングチームは、ノートブックのバージョン管理を行い、プルリクエストを通じて変更内容をレビューし、同じコードを開発環境、ステージング環境、本番環境にデプロイする必要があります。このソフトウェアエンジニアリング・ワークフローをサポートするDatabricksの機能はどれですか?",
        options: [
            "(A) リモートGitプロバイダーと統合された Databricks Gitフォルダー (旧: Repos)",
            "(B) ノートブックを DBC アーカイブとしてエクスポートし、ワークスペース間でメールで送信する。",
            "(C) ノートブックのソースファイルを DBFS / FileStore に保存し、手動でコピーする。",
            "(D) ノートブックの改訂履歴 (Revision History) を有効にし、必要に応じてスナップショットを復元する。"
        ],
        answerIndex: 0,
        explanation: "(A) プルリクエスト（PR）によるコードレビューや、CI/CDを通じた複数環境へのコードベースの展開など、エンタープライズのソフトウェアエンジニアリングを可能にするのは、GitHub/GitLabなどと連携する「Databricks Git folders (旧: Repos)」機能です。"
    },
    {
        category: "Databricks Compute / Architecture",
        question: "問題 148:\nデータエンジニアがDatabricksワークスペースでPythonノートブックを作成し、日々の売上データを処理するスケジュールジョブとして実行するように設定しました。Databricksアーキテクチャでは、このノートブックの保存と実行はどのように管理されるのでしょうか?",
        options: [
            "(A) ノートブックはコントロールプレーンに安全に保存・暗号化されており、ジョブの実行時にコードはデータプレーン (コンピューティングプレーン) のクラスターで実行される。",
            "(B) ノートブックは計算プレーンに安全に保存されており、ジョブの実行時にコードはコントロールプレーンで実行される。",
            "(C) ノートブックは Unity Catalog に安全に保存されており、ジョブの実行時には Delta Lake で実行される。",
            "(D) ノートブックはワークスペースストレージバケットに暗号化されずに保存され、ジョブの実行時にデータプレーンのドライバーノードで実行される。"
        ],
        answerIndex: 0,
        explanation: "(A) Databricksのアーキテクチャは分離されています。ノートブックファイルやワークスペースのUI、ジョブのスケジュール設定などはDatabricks側が管理する「コントロールプレーン」に保存されます。実際のジョブ実行（計算処理）は、顧客のクラウドアカウント側にある「データプレーン（コンピューティングプレーン）」のクラスター上で実行されます。"
    },
    {
        category: "Unity Catalog / Data Governance",
        question: "問題 149:\nデータエンジニアはテーブル `new_table` にアクセスする必要がありますが、適切な権限がありません。テーブルの所有者に権限を尋ねることはできますが、テーブルの所有者が誰なのかがわかりません。`new_table` の所有者を特定するために使用できるアプローチは次のどれですか?",
        options: [
            "(A) データエクスプローラー (Catalog Explorer) のテーブルページの「権限 (Permissions)」タブを確認する。",
            "(B) テーブルの所有者を特定する方法はない。",
            "(C) クラウドストレージ ソリューションのテーブルのページの所有者フィールドを確認する。",
            "(D) これらすべてのオプションはテーブルの所有者を特定するために使用できる。",
            "(E) データエクスプローラー (Catalog Explorer) のテーブルのメインページ（詳細画面）で「所有者 (Owner)」フィールドを確認する。"
        ],
        answerIndex: 4,
        explanation: "(E) Databricksの Catalog Explorer（データエクスプローラー）で対象のテーブルをクリックすると、テーブルの詳細（Details）ペインの最上部に「Owner（所有者）」フィールドが表示されており、そこに所有しているユーザーまたはグループ名が記載されています。"
    },
    {
        category: "Delta Lake",
        question: "問題 150:\nデータエンジニアは、eコマース取引のDeltaテーブルのデータレイアウトとクエリパフォーマンスを最適化する必要があります。このテーブルは、現在 `purchase_date` でパーティション分割（Partitioning）されています。しかし、通常「特定の日付範囲内」の「customer_id」をフィルターとしてクエリされます。カーディナリティが高い customer_id で検索する際、各パーティション内の複数のファイルにデータが分散し、全スキャンが発生してコストが増加しています。効率的な読み取りのために、データレイアウトをどのように最適化すべきでしょうか?",
        options: [
            "(A) 既存のパーティショニングを維持しながら、customer_id に対してリキッドクラスタリング (Liquid Clustering) を実装するようテーブルを変更する。",
            "(B) テーブルを再構築し、customer_id と purchase_date の両方に基づいて リキッドクラスタリング (Liquid Clustering) を実装するよう変更する。",
            "(C) テーブルを customer_id でパーティション分割するように変更する。",
            "(D) クラスター上で Delta Cache (キャッシュ) を有効にして、頻繁に行われる読み取りをキャッシュし、パフォーマンスを向上させる。"
        ],
        answerIndex: 1,
        explanation: "(B) purchase_date と customer_id の両方で頻繁にフィルタリングされる場合、従来のディレクトリベースのパーティショニング（Hive-style）よりも、「Liquid Clustering（リキッドクラスタリング）」を使用する方がはるかに柔軟で高パフォーマンスです。クラスタリングキーとして両方の列を指定（CLUSTER BY (purchase_date, customer_id)）することで、カーディナリティの高い列の検索が劇的に最適化されます。\n(A) パーティショニングとリキッドクラスタリングは併用せず、クラスタリングに置き換えるべきです。\n(C) カーディナリティの高い列でパーティション化すると、スモールファイル問題（無数の小さなディレクトリが生成される）を引き起こすためアンチパターンです。"
    },
    {
        category: "PySpark / Spark SQL",
        question: "問題 151:\nデータエンジニアは、ブロンズテーブルのデータクレンジングを担当しています。要件は、`customer_email` フィールドまたは `customer_phone` フィールドのいずれかがnullである行を削除することです。このデータクレンジングは、単一のメソッド呼び出しを使用して単一の操作で実行する必要があります。複数の列のnullを1回の呼び出しでフィルタリングできるPySparkのアプローチはどれですか?",
        options: [
            "(A) df.dropna(subset=['customer_email', 'customer_phone'])",
            "(B) df.where('customer_email IS NOT NULL').where('customer_phone IS NOT NULL')",
            "(C) df.na.drop(how='all')",
            "(D) df.filter(col('customer_email').isNotNull() & col('customer_phone').isNotNull())"
        ],
        answerIndex: 0,
        explanation: "(A) DataFrameから特定の複数の列（subset）を指定して、その列にnullが含まれる行を「単一のメソッド呼び出し」で削除するための最も簡潔で推奨されるPySparkメソッドは dropna(subset=[...]) です。デフォルトで how='any' となるため、指定したいずれかの列がnullであればその行を削除します。"
    },
    {
        category: "Medallion Architecture",
        question: "問題 152:\nデータエンジニアチームは、Databricks上に新しいデータプラットフォームを実装することを決定し、現在、各データレイヤーに各種類のデータをどのように保存するかを検討しています。メダリオンアーキテクチャに適したレイヤーとデータの組み合わせは何でしょうか?",
        options: [
            "(A) シルバーレイヤー - 預金口座申請からの生データ",
            "(B) ブロンズレイヤー - 国と都市ごとの現金預金額の概要",
            "(C) シルバーレイヤー - クリーンアップされたマスター顧客データ",
            "(D) ゴールドレイヤー - 重複のない送金取引"
        ],
        answerIndex: 2,
        explanation: "(C) メダリオンアーキテクチャにおいて、シルバーレイヤー (Silver layer) はブロンズレイヤーの生データをクレンジング、フィルタリング、および重複排除して「エンタープライズのクリーンなマスターデータ」を提供する役割を持ちます。\n(A) 生データはブロンズレイヤーに保存されます。\n(B) ビジネスレベルの概要・集計データはゴールドレイヤーに保存されます。\n(D) 単純な重複排除（クレンジング）はシルバーレイヤーの役割です。"
    },
    {
        category: "PySpark / Spark SQL",
        question: "問題 153:\nデータエンジニアが、複数のソースシステムから同じ顧客レコードを受け取るブロンズテーブルをクリーンアップしています。重複する行は、`customer_id` と `email` は同じですが、`ingestion_timestamp` の値が異なります。シルバーテーブルには、`customer_id` と `email` の一意の組み合わせごとに1つのレコードのみが含まれる必要があります。ビジネスキーに基づいて正しく重複排除を行うPySpark操作はどれですか?",
        options: [
            "(A) df.dropDuplicates(['customer_id', 'email'])",
            "(B) df.groupBy('customer_id', 'email').agg(max('ingestion_timestamp').alias('latest_ts'))",
            "(C) df.select('customer_id', 'email').distinct()",
            "(D) df.distinct()"
        ],
        answerIndex: 0,
        explanation: "(A) PySparkにおいて、DataFrameから「特定の列（ビジネスキー）」の組み合わせに基づいて重複レコードを排除し、他の列も保持したまま一意の行だけを残す正しいメソッドは dropDuplicates(['列1', '列2']) です。"
    },
    {
        category: "Unity Catalog / Data Governance",
        question: "問題 154:\nデータエンジニアが、パートナー組織にDatabricksアカウントの使い方を指導しています。両チームはいくつかのビジネスユースケースを共有しています。データエンジニアは、Unity Catalogで管理されているDeltaテーブルと、それらのテーブルを作成するノートブック（ジョブの一部）をパートナー組織と共有する必要があります。データエンジニアは、必要な情報をシームレスに共有するにはどうすればよいでしょうか?",
        options: [
            "(A) すべてのコードを圧縮してメールで共有し、データレイクからのデータ取り込みを許可する。",
            "(B) Delta Sharing を介して必要なデータセットとノートブックを共有する。Unity Catalog を介して権限を管理する。",
            "(C) Unity Catalogを使用すれば、データやノートブックを簡単に共有できる。",
            "(D) GitHub を介してコードベースへのアクセスを共有し、データレイクからデータセットを取り込めるようにする。"
        ],
        answerIndex: 1,
        explanation: "(B) Databricks間の安全なクロスワークスペース（またはクロス組織）共有において、データ（Deltaテーブル）とAIアセット（ノートブックやモデル）の両方をシームレスに共有するための標準機能は、Unity Catalogによって管理される「Delta Sharing」です。Databricks to Databricks共有機能により、ノートブックも共有対象に含めることができます。"
    },
    {
        category: "Databricks Jobs / Workflows",
        question: "問題 155:\nデータエンジニアは、各タスクが前のタスクの正常な完了に依存するワークフローで、複数のタスクをスケジュールしたいと考えています。このワークフローは、再試行 (リトライ) と監視 (モニタリング) をサポートする必要があります。Databricksのどの機能を使用すべきですか?",
        options: [
            "(A) Databricks Jobs (Databricks ワークフロー)",
            "(B) Spark UI",
            "(C) Delta Lake",
            "(D) DBFS"
        ],
        answerIndex: 0,
        explanation: "(A) 複数のタスク（ノートブックやPythonスクリプト）の依存関係を設定し、スケジュール実行、失敗時の自動リトライ、そして監視（アラートや実行履歴の確認）を統合的に管理する機能は「Databricks Jobs（ワークフロー）」です。"
    },
    {
        category: "Medallion Architecture",
        question: "問題 156:\n特定のユースケースに特化した、分断されたデータアーキテクチャ（サイロ化されたアーキテクチャ）を簡素化し、統合するために何が利用できるでしょうか?",
        options: [
            "(A) Delta Lake",
            "(B) データレイク",
            "(C) データウェアハウス",
            "(D) データレイクハウス (Data Lakehouse)"
        ],
        answerIndex: 3,
        explanation: "(D) 「データレイクハウス (Data Lakehouse)」アーキテクチャは、データレイクの柔軟性・スケーラビリティと、データウェアハウスのデータ管理機能・ACIDトランザクションを統合した概念です。これにより、これまでサイロ化されていたBI用（DWH）とAI/ML用（データレイク）のアーキテクチャを単一のプラットフォームに簡素化・統合します。"
    },
    {
        category: "Databricks Jobs / Workflows",
        question: "問題 157:\nデータエンジニアがDatabricksノートブックでバッチETLパイプラインの設計と管理を行っています。エンジニアは、異なるソースからの大規模なデータセットをクリーンアップ、変換、結合するために、SQLとPythonのコードを記述しています。エンジニアは、これらの手順を定期的に実行し、データパイプラインの一部としてスケジュールできる構造化されたプロセスに整理したいと考えています。このユースケースに適用できるDatabricksノートブックの機能はどれですか?",
        options: [
            "(A) リアルタイムストリーミング対応",
            "(B) 共同編集 (Co-authoring)",
            "(C) タスクワークフローとジョブスケジューリング",
            "(D) ノートブックのバージョン管理"
        ],
        answerIndex: 2,
        explanation: "(C) Databricksノートブックには、右上や右サイドバーから直接スケジュールを設定し、ノートブック自体をジョブ（タスクワークフロー）として定期実行させる「ジョブスケジューリング」機能がシームレスに統合されています。"
    },
    {
        category: "PySpark / Spark SQL",
        question: "問題 158:\nデータエンジニアは、開発中にSpark DataFrameのスキーマを調べて、列名とデータ型を理解したいと考えています。DataFrameのどのメソッドがスキーマをツリー形式で出力しますか?",
        options: [
            "(A) getSchema()",
            "(B) printSchema()",
            "(C) showSchema()",
            "(D) describeSchema()"
        ],
        answerIndex: 1,
        explanation: "(B) PySparkにおいて、DataFrameの構造（列名、データ型、Nullを許可するかどうか）を人間が読みやすいツリー形式（インデントされた階層構造）で標準出力に表示するメソッドは printSchema() です。"
    },
    {
        category: "Unity Catalog / Data Governance",
        question: "問題 159:\nある企業が、Databricksを使用していないものの、Delta形式で保存された大規模な履歴データセットへのアクセスを必要とするパートナーと共同作業を行っています。データエンジニアは、パートナーがアカウントを作成することなく、読み取り専用アクセスで安全にデータにアクセスできるようにする必要があります。データはどのように共有すべきでしょうか?",
        options: [
            "(A) データセットをCSVファイルにエクスポートし、手動でパートナーのシステムに転送して共有する。",
            "(B) パートナーにDatabricksワークスペースへのアクセス権を付与し、Deltaテーブルへの完全な書き込み権限を割り当てて、データセットを変更できるようにする。",
            "(C) Unity Catalogを使用してデータセットを共有し、両チームが同じ組織内のデータに対して完全な書き込みアクセス権を持つようにする。",
            "(D) Delta Sharingを使用してデータセットを共有する。これにより、パートナーはDatabricksアカウントを必要とせずに、安全な読み取り専用URLを使用してデータにアクセスでき、データが変更されないことが保証される。"
        ],
        answerIndex: 3,
        explanation: "(D) Delta Sharingの「オープン共有 (Open Sharing)」機能を使用すると、Databricksを使用していない外部のパートナーに対しても、アカウント作成不要で安全なダウンロードURLやクレデンシャルを提供し、大規模なDeltaテーブルを読み取り専用で直接共有することができます。"
    },
    {
        category: "Structured Streaming / Auto Loader",
        question: "問題 160:\nデータエンジニアが、クラウドストレージから新しいデータを取り込むための Auto Loader スクリプトを作成しています。スキーマが予期せず変更された場合、データ取り込みは即座に失敗する必要があります。そして、変更が下流のソースで確認され、意図した変更であることが検証されるまで、データ取り込みは失敗したままである必要があります。Auto Loaderのどの cloudFiles.schemaEvolutionMode 設定がこの要件を満たしますか?",
        options: [
            "(A) failOnNewColumns (新しい列で失敗)",
            "(B) none (なし)",
            "(C) rescue (レスキュー)",
            "(D) addNewColumns (新しい列を追加)"
        ],
        answerIndex: 0,
        explanation: "(A) Auto Loaderのスキーマ進化モードにおいて、新しい列などのスキーマ変更が検出された際に自動的にストリームを「失敗・停止 (Fail)」させる設定は failOnNewColumns です。これにより、意図しないデータ構造の変更がパイプラインに流れ込むのを防ぎ、エンジニアが確認して承認するまで取り込みをブロックできます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 1:\nデータエンジニアがデルタテーブルの小さなデータファイルをより大きなファイルに圧縮するために使用できるコマンドは次のうちどれですか?",
        options: [
            "(A) OPTIMIZE (最適化)",
            "(B) ZORDER (並べ替え順)",
            "(C) VACUUM (真空)",
            "(D) COMPACT"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Delta Lake は、テーブルからの読み取りクエリの速度を向上させることができます。この速度を向上させる方法の 1 つは、小さなファイルを大きなファイルに圧縮することです。圧縮は、次の OPTIMIZE コマンドを実行することでトリガーされます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 2:\n次の記述のうち、オートローダー (Auto Loader) を最もよく表しているのはどれですか?",
        options: [
            "(A) オートローダーを使用すると、変更データキャプチャ(CDC)フィードを適用して、ソースデータでキャプチャされた変更に基づいてテーブルを更新できます。",
            "(B) オートローダーは、データレイクにデータ信頼性を向上させるストレージレイヤーを追加することで、効率的な挿入、更新、削除、ロールバック機能を実現します。",
            "(C) オートローダーは、ファイルが蓄積されるソースの場所を監視し、コマンド実行ごとに新しく到着したファイルのみを識別して取り込みます。以前の実行ですでに取り込まれたファイルはスキップされます。",
            "(D) オートローダーを使用すると、ソースデルタテーブルを特定のバージョンでターゲット宛先に複製できます。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Auto Loaderは、クラウドストレージに新しいデータファイルが到着するたびに、それを段階的に効率的に処理します。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 3:\nDatabricksにおけるLiquid Clusteringの主な機能は何ですか?",
        options: [
            "(A) Delta Lakeに保存されているデータを暗号化する",
            "(B) クエリパフォーマンスを向上させるために、データレイアウトを段階的に最適化する",
            "(C) 新しいデータパイプラインの作成を自動化するため",
            "(D) ノード間のネットワーク接続速度を向上させるため"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：DatabricksのLiquid Clusteringは、Deltaテーブル内のデータの物理的なレイアウトを段階的に最適化するように設計された機能です。これは、指定されたクラスタリングキー（通常は頻繁にクエリされる列）に基づいてデータを整理することで実現されます。これにより、クエリ実行時に読み込まれるデータ量を削減し、クエリのパフォーマンスを向上させるような方法でデータが格納されます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 4:\nデータエンジニアがユーザー定義関数（UDF）を作成するために使用できるコードブロックは次のうちどれですか？",
        options: [
            "(A) CREATE UDF plus_one(value INTEGER)\n    RETURN value +1;",
            "(B) CREATE UDF plus_one(value INTEGER)\n    RETURNS INTEGER\n    RETURN value +1;",
            "(C) CREATE FUNCTION plus_one(value INTEGER)\n    RETURN value +1",
            "(D) CREATE FUNCTION plus_one(value INTEGER)\n    RETURNS INTEGER\n    RETURN value +1;"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：UDFを作成するための正しい構文は次のとおりです。\nCREATE [OR REPLACE] FUNCTION function_name ( [ parameter_name data_type [, ...] ] )\nRETURNS data_type\nRETURN { expression | query }"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 5:\nデータエンジニアは、以下のLakeflowジョブを管理します。\n         |--> Task B\nTask A --\n         |--> Task C\n\nタスク B は run_if: ALL_SUCCESS で構成され、タスク C は run_if: ALL_DONE で構成されます。\n以下のうち、この論理を正しく説明しているのはどれですか？",
        options: [
            "(A) タスクBはタスクAが成功した場合にのみ実行され、タスクCはタスクAの結果に関係なく実行されます。",
            "(B) タスクBは、タスクAとタスクCが成功した場合に実行され、タスクCは、タスクAがスキップされて終了した場合にのみ実行されます。",
            "(C) タスクBは、タスクAとタスクCが成功した場合に実行され、タスクCは他のタスクの結果に関係なく実行されます。",
            "(D) タスクBはタスクAが成功した場合にのみ実行され、タスクCはタスクAが失敗した場合にのみ実行される。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：正しい設定では、以下のように動作します。\nrun_if: ALL_SUCCESS（デフォルト）：下流タスクは、上流の依存関係にあるすべてのタスクが正常に完了した場合にのみ実行されます。タスクBはタスクAに依存しているため、タスクBはタスクAが成功した場合にのみ実行されます。\nrun_if: ALL_DONE：下流タスクは、上流の依存関係がすべて完了するとすぐに実行されます。依存関係が成功したか、失敗したか、スキップされたかは関係ありません。タスクCはタスクAに依存しているため、タスクCはタスクAの結果に関係なく実行されます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 6:\nデータエンジニアがユーザーにテーブルへのアクセス権を付与しようとしています。以下のコマンドは正常に実行されました。\n\nGRANT SELECT ON TABLE bank_catalog.fraud_schema.alert_cases TO analyst_group;\n\nしかし、analyst_group のメンバーがテーブルを照会しようとすると、「権限が不足しています」というエラーが発生します。\nこの問題の原因として最も可能性が高いのは、次のうちどれとどれですか？",
        options: [
            "(A) アナリストグループには、fraud_schemaに対するSELECT権限がありません。",
            "(B) アナリストグループには、bank_catalog に対する USE CATALOG権限がありません。",
            "(C) アナリストグループは、fraud_schemaに対する USE SCHEMA権限を持っていません。",
            "(D) アナリストグループには、bank_catalogに対するSELECT権限がありません。",
            "(E) データエンジニアはalert_casesテーブルの所有者ではありません。"
        ],
        answerIndex: [1, 2],
        explanation: "解答：(B), (C)\n\n解説：Databricks Unity Catalogでは、権限はカタログ->スキーマ->オブジェクトという厳密な階層で動作します。オブジェクトを正常にクエリするには、プリンシパルは、オブジェクトレベルの権限（テーブルに対するSELECT権限）を持っているだけでなく、そのオブジェクトのパスにあるすべての親コンテナーに対して明示的なトラバーサル権限も持っている必要があります。\n・USE CATALOG：特定のカタログに含まれるオブジェクトを閲覧および操作するために必要です。\n・USE SCHEMA：この特定のスキーマに含まれるオブジェクトを走査および操作するために必要です。\nデータエンジニアがテーブルレベルの権限付与のみを実行したため、親トラバーサル権限が付与されるまで、アナリストはINSUFFICIENT_PERMISSIONSエラーを受け取ります。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 7:\nデータエンジニアリングチームは、Azure Data Lake StorageからDeltaテーブルに、1日あたり10万個の小さなJSONファイルを新規に取り込んでいます。チームは低遅延の増分データ取り込みを必要としており、頻繁なディレクトリスキャンによって発生するストレージAPIのコストを最小限に抑えたいと考えています。\nチームはどのデータ取り込み構成を優先すべきでしょうか？",
        options: [
            "(A) 5分ごとにスケジュールされたCOPY INTOコマンドを使用し、ディレクトリを再帰的にスキャンしてください。",
            "(B) イベントベースのファイル検出を有効にするには、Auto Loader を cloudFiles.useNotifications=true と組み合わせて使用します。",
            "(C) Spark Structured Streamingを、メタデータDeltaテーブルを使用した手動ファイル追跡と組み合わせて使用します。",
            "(D) ディレクトリ一覧表示モードでオートローダーを使用し、間隔を短く設定して新しいファイルを頻繁にチェックしてください。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：cloudFiles.useNotifications = true はDatabricks Auto Loaderのオプションで、取り込みメカニズムをディレクトリ一覧表示からイベント駆動型の通知システムに切り替えることができます。Auto Loaderは、ADLSフォルダを繰り返しスキャンして新しいファイルを検出する代わりに、Azure Event Gridの通知を使用して新しいファイルが到着したタイミングを把握します。これにより、ストレージAPIの呼び出しコストを削減し、低遅延を実現します。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 8:\nDatabricks SQLウェアハウスの自動停止機能を使用するメリットは次のうちどれですか?",
        options: [
            "(A) 理想的なサービスを自動的に停止することで、ウェアハウスのパフォーマンスを向上させます。",
            "(B) ウェアハウスの未使用ポートを自動的に停止することで、セキュリティを強化します。",
            "(C) 長時間実行されるSQLクエリを自動的に停止することで、ウェアハウスの可用性を向上させます。",
            "(D) ウェアハウスの総稼働時間を最小限に抑えコストを削減する。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：自動停止機能は、ウェアハウスが指定された分数の間アイドル状態（クエリが実行されていない状態）になると、自動的に停止します。これにより、不要なコンピュートコストの発生を防ぎ、総稼働時間を最小限に抑えることができます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 9:\n以下の構造化ストリーミングクエリを前提とします。\n( spark.table(\"orders\")\n  .withColumn(\"total_after_tax\", col(\"total\") + col(\"tax\"))\n  .writeStream\n  .option(\"checkpointLocation\", checkpointPath)\n  .outputMode(\"append\")\n  .______________\n  .table(\"new_orders\")\n)\n\n空欄を埋めて、クエリが30秒ごとにマイクロバッチを実行してデータを処理するようにしてください。",
        options: [
            "(A) trigger(\"30 seconds\")",
            "(B) trigger(processingTime=\"30 seconds\")",
            "(C) trigger(once=\"30 seconds\")",
            "(D) processingTime(\"30 seconds\")"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Spark Structured Streamingでは、ユーザーが指定した間隔でデータをマイクロバッチで処理するために、trigger(processingTime=\"30 seconds\") のように processingTime キーワードを使用できます。これにより、時間間隔を文字列として指定できます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 10:\nデータエンジニアがDatabricks SQLパイプラインで受信トランザクションデータを検証しています。一部のレコードの数値フィールドに予期しない記号が含まれています。エンジニアは次のクエリを実行します。\nSELECT TRY_CAST('100$' AS INT);\nこのクエリの結果を最も適切に表しているのは、次のうちどれですか？",
        options: [
            "(A) NULL",
            "(B) 100",
            "(C) 100ドル",
            "(D) エラーが発生しました"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Databricks SQL では、TRY_CAST 関数は式を指定されたデータ型にキャストしようとします。標準の CAST 関数とまったく同じように動作しますが、互換性のないデータや書式設定の問題で変換が失敗した場合に、実行時エラーをスローする代わりに、安全に NULL を返す点が異なります。文字列「100$」には非数値記号が含まれているため、TRY_CAST はエラーを出さずに NULL を出力します。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 11:\nデータエンジニアリングチームがノートブックを構築しており、開発中に迅速な反復とデバッグが必要です。この場合、どのコンピューティングリソースを使用すべきでしょうか？",
        options: [
            "(A) 対話型コンピューティング (All-Purpose Compute)",
            "(B) インスタンスプール",
            "(C) サーバーレスジョブコンピューティング",
            "(D) サーバーレスSQLウェアハウス"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：対話型コンピューティング（All-Purpose Compute）は、対話型ノートブックを使用してデータを共同で分析するために特別に設計されています。コードをセルごとに記述して即座に実行し、結果をリアルタイムで確認できるため、迅速な開発とトラブルシューティングに最適な選択肢です。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 12:\n以下の構造化ストリーミングクエリを前提とします。\n( spark.readStream\n  .format(\"cloudFiles\")\n  .option(\"cloudFiles.format\", \"json\")\n  .load(ordersLocation)\n  .writeStream\n  .option(\"checkpointLocation\", checkpointPath)\n  .table(\"uncleanedOrders\")\n)\nメダリオンアーキテクチャにおけるこのクエリの目的を最もよく表しているのは、次のうちどれですか？",
        options: [
            "(A) このクエリは、ゴールドテーブルから本番アプリケーションへのデータ転送を実行します。",
            "(B) このクエリは、ブロンズテーブルからシルバーテーブルへのホップを実行しています。",
            "(C) このクエリは、生データをブロンズテーブルに取り込んでいます。",
            "(D) このクエリは、SilverテーブルからGoldテーブルへのホップを実行しています。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：このクエリは、Auto Loader (format(\"cloudFiles\")) を使用して、指定された場所 (ordersLocation) から生の JSON データをストリーミングで読み込み、未クレンジングの初期テーブル (uncleanedOrders) に保存しています。これはまさに生データをブロンズテーブルに取り込む処理です。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 13:\nデータエンジニアが顧客の取引を分析し、各顧客の取引金額の最大値と最小値を特定する必要があります。彼らは以下のコード構造を使用します。\nfrom pyspark.sql import functions as F\nresult_df = df . ____________ ( \"customer_id \" ). agg (\n    F.max ( \"transaction_amount\" ). alias ( \" max_transaction \" ),\n    F.min ( \"transaction_amount\" ) . alias ( \" min_transaction\" )\n)\n指定された要件を満たすために、空欄に正しく入力される関数はどれですか？",
        options: [
            "(A) withColumn",
            "(B) select",
            "(C) window",
            "(D) groupBy"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：groupBy(\"customer_id\") により、データを顧客ごとにグループ化します。その後、agg() を使用して各グループ内で max() や min() などの集計関数を適用できるようになります。これは、顧客レベルの統計情報を計算する正しいアプローチです。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 14:\nデータエンジニアリングチームは、Unity Catalogのinfra_catalog.ops_dbスキーマでDeltaテーブルを管理しています。device_logsというテーブルは元々外部テーブルとして作成されましたが、チームは現在、Databricksにテーブルのライフサイクル全体を管理させ、テーブルが削除された際に基となるファイルを自動的にクリーンアップするようにしたいと考えています。\nチームは、同じテーブル名、権限、履歴を維持しながら、この外部テーブルを管理対象テーブルに変換するには、どのコマンドを使用すべきでしょうか？",
        options: [
            "(A) ALTER TABLE infra_catalog.ops_db.device_logs SET MANAGED;",
            "(B) CREATE OR CONVERT TABLE infra_catalog.ops_db.device_logs AS MANAGED;",
            "(C) ALTER TABLE infra_catalog.ops_db.device_logs SET type = \"MANAGED\";",
            "(D) CREATE OR REPLACE TABLE infra_catalog.ops_db.device_logs;"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：既存の外部テーブルのメタデータ（権限、タグ、履歴など）を保持したまま管理対象テーブルに変換する正しいコマンドは ALTER TABLE ... SET MANAGED; です。変換後、Databricksはテーブルのライフサイクルを完全に管理し、テーブルが削除された際には基となるデータファイルを自動的に削除します。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 15:\nDatabricks Asset Bundle構成ファイルの正しい形式を最も適切に説明しているのは、次のうちどれですか？",
        options: [
            "(A) ワークスペースパス、ジョブID、および計算仕様を指定する、asset_bundle.xmlという名前のXMLファイル",
            "(B) ターゲット、リソース、構成など、バンドルの構造を定義するdatabricks.ymlという名前のYAMLファイル。",
            "(C) 環境変数とユーザーロールのフィールドを含む、bundle-config.ymlという名前のYAMLファイル。",
            "(D) クラスター定義とジョブスケジュールを含む、databricks_asset.jsonという名前のJSONファイル"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Databricks Asset Bundles (DABs) は、databricks.yml という名前の構造化されたYAML設定ファイルを主要なエントリポイントとして使用します。このファイル内で、ターゲット環境、ジョブやパイプラインのリソース定義、ワークスペース設定などが宣言的に記述されます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 16:\n衣料品EC企業のデータアナリストが、商品カタログ生成ツールを開発しています。彼らは以下の2つのPySparkデータフレームを使用しています。\n・colors_df（利用可能な製品カラーを含む）\n・sizes_df（利用可能な製品サイズを含む）\n在庫計画のためにデザインチームが有効なバリエーションをすべて作成できるよう、色とサイズのあらゆる組み合わせを生成する必要があります。これを実現するPySparkコードはどれですか？",
        options: [
            "(A) joined_df = colors_df.join(sizes_df, \"color_id\", \"inner\")",
            "(B) joined_df = colors_df.join(sizes_df, \"color_id\", \"full\")",
            "(C) joined_df = colors_df.join(sizes_df, \"color_id\", \"left\")",
            "(D) joined_df = colors_df.crossJoin(sizes_df)"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：2つのデータフレームのあらゆる組み合わせ（デカルト積）を生成するには、クロスジョイン（crossJoin）が必要です。これにより、最初のデータフレームのすべての行と2番目のデータフレームのすべての行が明示的に結合され、色とサイズの全組み合わせマトリックスが作成されます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 17:\nデータエンジニアが、複数のノートブックタスクを含むLakeflow (Databricks Jobs) ジョブを設計します。ジョブ全体に対してprocessing_regionパラメータを一度だけ設定し、すべてのタスクに同じ値を割り当てたいと考えています。また、ノートブックコードを変更することなく、ジョブのUIから実行時にprocessing_regionの値を変更できるようにする必要があります。\nこれらの要件を最もよく満たす構成方法はどれですか？",
        options: [
            "(A) タスク間の一貫性を確保するため、各ノートブック内でprocessing_region を個別にハードコーディングする。",
            "(B) processing_regionをジョブレベルのパラメータとして定義し、各タスクで動的な値 ({{job.parameters.processing_region}}) を使用して参照する。",
            "(C) processing_region を最初のノートブックタスクにのみ渡し、それを手動で下流のノートブックに転送する。",
            "(D) processing_region をクラスタ環境変数として定義し、ノートブック内で spark.conf.get でアクセスする。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：ジョブレベルでパラメータを定義し、タスクのパラメータ設定内で {{job.parameters.processing_region}} のように動的参照構文を使用することで、値がすべてのタスクに自動的に挿入されます。これにより、コードを変更することなく、ジョブのUIから実行時に簡単にパラメータを上書きすることができます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 18:\nデータエンジニアが、起動時に繰り返し失敗するDatabricksジョブクラスタのトラブルシューティングを行っています。ドライバログには、「Executor Lost」と「OutOfMemoryError: Java heap space」というメッセージが頻繁に表示されています。より大きなインスタンスに切り替えたところ、問題は解決しました。\nこの問題の最も可能性の高い原因は何だったのでしょうか？",
        options: [
            "(A) ライブラリの設定ミス",
            "(B) 入力データサイズ (またはデータの偏り)",
            "(C) スキーマの不一致",
            "(D) ファイル形式が正しくありません"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：OutOfMemoryError (OOM) と Executor Lost メッセージの組み合わせは、処理中にクラスタのメモリ容量が限界を超えたことを示しています。これは、大量の入力データが一度にロードされたり、データスキュー（偏り）によって特定のノードに負荷が集中したりした場合に発生します。インスタンスをスケールアップして解決したことからも、データサイズ・処理負荷が原因であることが分かります。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 19:\nUnity Catalogで作業するデータエンジニアリングチームは、新しい制限付き権限セットを割り当てる前に、hr_groupがmain.hr_schemaに対して既存の権限を保持していないことを確認する必要があります。\nこの要件を満たすために、チームはまずどのコマンドを実行すべきでしょうか？",
        options: [
            "(A) SHOW GRANTS ON SCHEMA main.hr_schema;",
            "(B) SHOW GRANTS hr_group ON SCHEMA main.hr_schema;",
            "(C) DENY ALL PRIVILEGES ON SCHEMA main.hr_schema TO hr_group;",
            "(D) REVOKE ALL PRIVILEGES ON SCHEMA main.hr_schema FROM hr_group;"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：プリンシパル（ユーザーまたはグループ）に新しい制限付き権限セットを割り当てる前に既存の権限が保持されないようにするには、現在保持している明示的な権限をすべて削除する必要があります。REVOKE ALL PRIVILEGES コマンドを使用することで、クリーンな状態にリセットできます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 20:\nデータエンジニアが、以下のdatabricks.ymlファイルで新しいバンドルプロジェクトを設定しています。\n\nbundle:\n  name: demo_bundle\ninclude:\n  - resources/*.yml\n  - pipelines/*.yml\n\n彼らは、ホストURLとルートストレージパスを設定することで、開発用のターゲット環境「dev」を定義したいと考えている。どの構成がこの要件を満たしますか？",
        options: [
            "(A) hosts:\n      dev:\n       URL: https://...\n       root_path: ...",
            "(B) environments:\n      dev:\n        mode: development\n        workspace:\n           host: https://...\n           root_path: ...",
            "(C) workspaces:\n      target: dev\n        host: https://...\n        root_path: ...",
            "(D) targets:\n     dev:\n       mode: development\n       workspace:\n          host: https://...\n          root_path: ..."
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：宣言型自動化バンドル (DABs) の構成ファイル (databricks.yml) では、環境（開発・本番など）ごとの設定はトップレベルの `targets:` ブロックの下で定義します。さらに、その環境内に `workspace:` をネストして `host` や `root_path` を指定するのが正しいYAML構造です。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 21:\nUnity Catalog の管理対象テーブルで予測最適化 (Predictive Optimization) を有効にすることによるメリットを説明しているのは、次のうちどれとどれですか？",
        options: [
            "(A) ストレージ使用量を予測し、データを階層間で再配分することで、全体的なコストを削減します。",
            "(B) 書き込み時にデータを自動的に暗号化し、機密性の高い列をマスキングすることで、データプライバシーを強化します。",
            "(C) テーブル上でメンテナンス作業を自動的に実行することで、メンテナンスを簡素化します。",
            "(D) テーブル列の欠損値を自動的に予測することで、データプロファイリングの精度を向上させます。",
            "(E) テーブルにデータが書き込まれる際に統計情報を収集することで、クエリのパフォーマンスを向上させます。"
        ],
        answerIndex: [2, 4],
        explanation: "解答：(C), (E)\n\n解説：Databricksの予測最適化 (Predictive Optimization) は、Unity Catalogの管理対象テーブルに対して以下の利点を提供します。\n・VACUUM、OPTIMIZE、ANALYZEなどのバックグラウンドメンテナンスタスクを最適に自動実行してメンテナンスを簡素化します。\n・データの書き込み時にテーブル統計情報を自動収集し、クエリ最適化ツールがより効率的な実行計画を立てられるようにすることでパフォーマンスを向上させます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 22:\nDatabricks Lakehouseのアーキテクチャによると、顧客のクラウドアカウントには次のうちどれが配置されますか？",
        options: [
            "(A) Databricksウェブアプリケーション (コントロールプレーン)",
            "(B) ワークフロー (ジョブスケジュール管理)",
            "(C) 従来のコンピューティング仮想マシン (データプレーン)",
            "(D) ノートブック (コードの保存場所)"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Databricksのアーキテクチャでは、コントロールプレーン（Webアプリケーション、ノートブックの保存、ワークフロースケジュールなど）はDatabricksが管理するクラウドアカウント内に配置されます。一方、実際のデータ処理を行う従来のクラスター仮想マシン（コンピューティングリソース）は、顧客のクラウドアカウント内の「データプレーン」にデプロイされます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 23:\nデータエンジニアは、カタログ内の多数のテーブルにわたって、confidential_info というタグが付いたすべての列に対して、行フィルタと列マスクを適用したいと考えています。\nデータエンジニアはこのタスクを完了するために、どの方法を用いるべきでしょうか？",
        options: [
            "(A) テーブルマスキングルールを動的に管理するためのカスタムコードロジックを記述します。",
            "(B) マスキングルールを個別に適用するために、各テーブルごとに動的ビューを手動で作成します。",
            "(C) テーブル作成時に機密列でテーブルをパーティション分割し、パーティションレベルでアクセスを制限する。",
            "(D) Unity Catalogの属性ベースアクセス制御 (ABAC) ポリシーを関連するすべてのテーブルに一元的に適用する。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Unity Catalogは属性ベースアクセス制御（ABAC）ポリシーをサポートしており、タグ（confidential_infoなど）に基づいて行フィルターや列マスクを定義できます。タグベースのポリシーを適用することで、現在および将来作成される該当タグ付きテーブルすべてに自動的にセキュリティルールが適用され、管理負担が大幅に軽減されます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 24:\nLakeflow Connectにおいて、以下のオプションのうち、管理対象のデータ取り込みコネクタとみなされるのはどれですか？",
        options: [
            "(A) Auto Loader",
            "(B) データベースコネクタ (Database connectors)",
            "(C) COPY INTO",
            "(D) CREATE TABLE AS (CTAS)",
            "(E) Software as a Service (SaaS) コネクタ"
        ],
        answerIndex: [1, 4],
        explanation: "解答：(B), (E)\n\n解説：Databricks Lakeflow Connectにおいて、「マネージドコネクタ（ノーコード管理対象コネクタ）」として分類されるのは、Salesforceなどの SaaSコネクタ と、PostgreSQLなどの データベースコネクタ です。これらはインフラストラクチャやAPIのページネーションなどをフルマネージドで処理します。一方、Auto LoaderやCOPY INTOは、コードベースのクラウドオブジェクトストレージコネクタや従来のSQLコマンドです。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 25:\nデータプラットフォームチームは、宣言型自動化バンドル（Databricksアセットバンドル）を本番環境にデプロイするためのCI/CDパイプラインを構築しています。このデプロイは、自動化されたパイプライン内で非対話的に実行される必要があり、確認プロンプトが表示されても実行がブロックされないようにする必要があります。\nこの要件を満たすために、チームはどのデプロイコマンドを使用すべきでしょうか？",
        options: [
            "(A) databricks bundle deploy --target prod --confirm",
            "(B) databricks bundle deploy --target prod --force",
            "(C) databricks bundle deploy --target prod --auto-approve",
            "(D) databricks bundle deploy --target prod --non-interactive"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：CI/CDツール内でバンドルを非対話的（手動でのyes/noの入力なし）にデプロイする場合、`--auto-approve` フラグを使用します。これにより、Databricks CLIはリソースの更新確認プロンプトをスキップし、デプロイを自動的に承認して実行します。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 26:\nデータエンジニアが、クラウドストレージからJSONログを取り込むLakeflowジョブを作成しました。新しいファイルは予測不可能なタイミングで到着するため、チームは新しいファイルが到着したらすぐにジョブを自動的に実行し、データを即座に処理したいと考えています。\nデータエンジニアはこの作業にどのようなトリガー構成を使用すべきでしょうか？",
        options: [
            "(A) ファイル到着トリガー (File Arrival Trigger)",
            "(B) 連続トリガー (Continuous Trigger)",
            "(C) スケジュールされたトリガー",
            "(D) テーブル更新トリガー"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Databricks Jobsの「ファイル到着トリガー (File Arrival Trigger)」は、指定したクラウドストレージパスやUnity Catalogボリュームに新しいファイルが到着したイベントを監視し、ジョブの実行を自動的に開始します。データの到着パターンが不規則な場合に、即時処理を行うための最適なトリガーです。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 27:\nDeltaテーブルを削除する際に、テーブルのメタデータのみが削除され、データファイルはストレージに残る理由として、次のうちどれが正しいでしょうか？",
        options: [
            "(A) コマンドを実行しているユーザーには、データファイルを削除する権限がありません。",
            "(B) Deltaは、削除対象ファイルを参照している長時間実行中の操作がないことを保証するため、保持しきい値未満のファイルの削除を防止します。",
            "(C) テーブルは外部テーブル (External Table) です。",
            "(D) テーブルは管理対象テーブル (Managed Table) です。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：LOCATION 句を使用してデータが外部ストレージパスに保存される「外部テーブル (External Table)」に対して DROP TABLE コマンドを実行すると、メタストア内のテーブル定義（メタデータ）のみが削除され、基となる物理的なデータファイルはクラウドストレージに保持されます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 28:\nデータエンジニアがDatabricks上の大規模なデータセットを調査し、`df.summary()` でデータをより深く理解するために様々な操作を実行します。このコマンドの出力を最もよく表しているのは、次のうちどれですか？",
        options: [
            "(A) DataFrame変換のためのSpark実行プラン。実行中に実行される論理クエリ最適化および物理クエリ最適化の手順の詳細が含まれます。",
            "(B) 各列のカウント、平均値、標準偏差、最小値、最大値、および近似四分位値などの統計指標を含むデータフレーム。",
            "(C) データフレームから自動的に生成されたヒストグラム、円グラフ、インタラクティブグラフなどの傾向とグラフを表示する視覚化ダッシュボード。",
            "(D) データセットのAI生成による要約。基となるデータ値に基づいて、洞察、パターン、推奨事項を提供する。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：PySparkの `df.summary()` コマンドは、探索的データ分析に使用されます。データフレーム内の列に対して、カウント、平均値、標準偏差、最小値、最大値、および四分位値（25%, 50%, 75%）などの基本的な統計指標を計算し、新しいDataFrameとして出力します。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 29:\nデータアナリストは、products_dfとreviews_dfという2つのPySparkデータフレーム（どちらにもproduct_id列が含まれています）を扱います。彼らは、レビューがない製品も含め、すべての製品を含むデータフレームを作成し、利用可能な場合はレビューデータを追加する必要があります。\nこれを実現するPySparkコードはどれですか？",
        options: [
            "(A) joined_df = products_df.join(reviews_df, \"product_id\", \"left\")",
            "(B) joined_df = products_df.join(reviews_df, \"product_id\", \"full\")",
            "(C) joined_df = products_df.join(reviews_df, \"product_id\", \"inner\")",
            "(D) joined_df = products_df.join(reviews_df, \"product_id\", \"cross\")"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：左結合（\"left\" または \"left_outer\"）を使用すると、左側のデータフレーム（products_df）のすべての行（すべての製品）を保持しつつ、右側のデータフレーム（reviews_df）に一致するレコードがある場合はそのデータを追加します。一致するレビューがない製品には、レビュー列にNULLが設定されて保持されます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 30:\nデータエンジニアがDeltaタイムトラベル機能を使用してテーブルを以前のバージョンにロールバックしようとしましたが、データファイルが存在しないというエラーが発生しました。\n以下のコマンドのうち、データファイルの削除を引き起こしたテーブル上で実行されたのはどれですか？",
        options: [
            "(A) DELETE",
            "(B) VACUUM",
            "(C) ZORDER BY",
            "(D) OPTIMIZE"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Deltaテーブルに対して VACUUM コマンドを実行すると、指定されたデータ保持期間（デフォルトで7日間）よりも古い、参照されなくなった未使用のデータファイルが物理的に削除されます。その結果、そのファイルが存在していた過去のバージョンへタイムトラベル（ロールバック）することはできなくなります。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 31:\nVACUUMコマンドのデフォルトのデータ保持期間はどれくらいですか？",
        options: [
            "(A) 30日間",
            "(B) 365日",
            "(C) 7日間",
            "(D) 0日"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：VACUUM コマンドのデフォルトの保持期間のしきい値は7日間です。つまり、VACUUM操作では、7日以内に作成された古い履歴ファイルは、長時間実行されている同時クエリに影響を与えないよう安全のために削除されません。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 32:\n「テーブル、クエリ、ノートブック、ダッシュボードなど、さまざまなデータ資産間の関係性を視覚的に示す機能で、ユーザーはLakehouseプラットフォーム全体におけるデータの発生源と流れを追跡できます。」\n上記の記述で説明されているのは、次のうちどれですか？",
        options: [
            "(A) Databricks Jobs (Databricksの求人情報)",
            "(B) Unity Catalogのデータリネージ (Data Lineage)",
            "(C) Databricks Lakeflow",
            "(D) Delta Live Tables DAGs"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：この説明は、Unity Catalog の「データリネージ (Data Lineage)」機能を正確に定義しています。データフローの透明性を確保し、データがどこから来てどこへ流れているのか（上流と下流の依存関係）を可視化するガバナンス機能です。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 33:\nデータエンジニアは、\"2026-01\" のように年-月の形式でフォーマットされた `date_str` 列を持つDataFrame dfを持っており、月の値のみを含む新しい列 `month` を作成したいと考えています。\nデータエンジニアはどのPySparkコードスニペットを使用すべきでしょうか？",
        options: [
            "(A) import pyspark.sql.functions as F\nresultDf = df.withColumn(\"month\", F.split(F.col(\"date_str\"), \"-0\").getItem(1))",
            "(B) import pyspark.sql.functions as F\nresultDf = df.withColumn(\"month\", F.split(F.col(\"date_str\"), \"-0\").getItem(2))",
            "(C) import pyspark.sql.functions as F\nresultDf = df.withColumn(\"month\", F.split(F.col(\"date_str\"), \"-\").getItem(2))",
            "(D) import pyspark.sql.functions as F\nresultDf = df.withColumn(\"month\", F.split(F.col(\"date_str\"), \"-\").getItem(1))"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：`split(col, \"-\")` を使用すると、\"2026-01\" は `[\"2026\", \"01\"]` という配列に分割されます。PySparkの配列インデックスは0から始まるため、`getItem(0)` が年（\"2026\"）、`getItem(1)` が月（\"01\"）を返します。\"-0\"で区切る方法は、10月（\"2026-10\"）以降のデータで破綻するため誤りです。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 34:\nデータエンジニアリングチームが、大規模なDeltaテーブルに対してSpark SQLクエリを実行しています。このクエリは、大規模なファクトテーブルと小規模なディメンションテーブルを結合するものです。アダプティブクエリ実行（AQE）を有効にしたところ、クエリロジックを変更することなくパフォーマンスが向上したことがわかりました。\nこのシナリオにおいて、AQEがパフォーマンスを向上させる主な理由は何ですか？",
        options: [
            "(A) AQEは、データサイズに関係なく、すべての結合でソートマージ結合を使用するように強制します。",
            "(B) AQEは、すべての結合においてシャッフルを完全に無効にします。",
            "(C) AQEは、実際のデータ統計に基づいて、実行時に自動的に結合をブロードキャスト結合に変換します。",
            "(D) AQEはクエリをPythonコードに書き換えて、実行速度を向上させます。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：アダプティブクエリ実行（AQE）は、ステージ間で収集された実際のデータサイズや統計情報を使用して、実行時にクエリプランを動的に最適化します。ディメンションテーブルの処理後のサイズが十分に小さいと判断された場合、コストの高いシャッフルソートマージ結合から、シャッフルの発生しないブロードキャストハッシュ結合へと自動的に切り替え、パフォーマンスを向上させます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 35:\nストリーミングETLジョブは、デフォルトのスキーマ進化モード「addNewColumns」を指定したAuto Loaderを使用して、売上データをDeltaテーブルに取り込みます。デプロイ後、プロデューサーはdiscountという名前の新しい列の送信を開始します。\nAuto Loaderはこのフィールドをどのように処理しますか？",
        options: [
            "(A) 割引(discount)は、null許容列として自動的に追加され、値は新規レコードに対してのみ入力されます。",
            "(B) 割引は自動的に追加され、以前のすべての行はデフォルトの割引率0で書き換えられます。",
            "(C) 割引は自動マージ操作を使用してアップサートされ、一致するキーに基づいて以前の行を更新できます。",
            "(D) 割引は自動的に適用され、新しいスキーマに一致しない以前の行はすべてテーブルから削除されます。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Auto Loader の `addNewColumns` モード（デフォルト）では、新しい列が検出されると自動的にテーブルのスキーマを進化（追加）させます。過去の履歴データを上書きしてデフォルト値を入れるようなバックフィルは行われず、過去のレコードに対してその列をクエリした場合は単純に NULL が返されます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 36:\nデータエンジニアリングチームは、長時間実行される複数のタスクからなるジョブを実行しています。このジョブの実行が完了した際に、チームメンバーに通知する必要があります。\nジョブ完了時にチームメンバーにメールを送信するには、以下のどの方法が利用できますか？",
        options: [
            "(A) ジョブ完了時に通知を受け取るように設定できるのは、ジョブの所有者のみです。",
            "(B) Job API を使用することで、各タスクのステータスに応じてプログラムでメールを送信できます。",
            "(C) ジョブページ (UI) でメール通知設定を構成できます。",
            "(D) ジョブが完了したときにユーザーに通知する方法はありません。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Databricks Jobs には、ジョブの開始、成功、失敗などのイベントに基づいてメールやWebhook（Slackなど）を送信する通知機能がUIに標準で備わっています。ジョブページの「ジョブ通知（Job notifications）」からチームのメーリングリストなどを追加できます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 37:\nデータエンジニアリングチームは、データ取り込みタスクに続いて、ストリーミング処理とバッチ処理の2つの実行パスが可能なLakeflowジョブを作成します。彼らは、processing_modeパラメータに基づいて適切なパスを動的に選択したいと考えています。\nLakeflowジョブにおける条件付きタスク実行を最も効果的にサポートするソリューションはどれですか？",
        options: [
            "(A) ストリーミングとバッチ処理のロジックを単一のノートブックタスクに統合し、コード内でプログラムによって実行フローを決定します。",
            "(B) 両方のタスクを並列実行し、パラメータに基づいて、後続のタスクが無関係な出力を無視するようにします。",
            "(C) 両方のタスクを並列実行し、各タスク内でprocessing_modeパラメータを評価します。",
            "(D) If/else条件付きタスクを使用して、processing_modeパラメータに基づいて実行をルーティングします。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Databricks Jobs には、実行時パラメータ（processing_mode など）や前のタスクの出力結果に基づいて、後続の実行パスを動的に分岐させる「If/else タスク」が用意されています。これにより、必要なパスだけを実行し、不要な計算リソースの消費を防ぐことができます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 38:\nデータエンジニアは、次のSQLクエリを使用します。\nGRANT MODIFY ON TABLE employees TO hr_team\n次のうち、MODIFY 特権によって与えられる能力を説明しているのはどれですか？",
        options: [
            "(A) テーブル内のデータを変更する機能を提供します。",
            "(B) テーブルからデータを追加する機能を提供します。",
            "(C) テーブル内のデータを追加、更新、または削除する機能を提供します。",
            "(D) テーブルからデータを削除する機能を提供します。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Unity Catalogにおいて、MODIFY 権限を付与されたユーザーやグループは、対象のテーブルに対してデータ操作言語（DML）である INSERT (追加)、UPDATE (更新)、DELETE (削除)、MERGE などの操作をすべて行うことができるようになります。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 39:\nデータエンジニアリングチームは、Databricks上で複雑なETLパイプラインを開発しています。彼らは、ワークフロー構成がバージョン管理され、ステージング環境と本番環境の両方で確実にデプロイできることを保証したいと考えています。\nこの課題を達成するための最も適切な解決策は何でしょうか？",
        options: [
            "(A) ソースコードはGitフォルダに保存し、Databricks REST APIを使用してジョブをデプロイします。",
            "(B) ソースコードはGitフォルダに保存し、Databricks Asset Bundles (DABs) を使用してジョブをデプロイします。",
            "(C) Notebookの組み込みバージョン履歴をソース管理に活用し、サーバーレス Notebook の環境を使用してジョブをデプロイします。",
            "(D) Notebookに組み込まれているバージョン履歴をソース管理に活用し、Databricks UIを使用してジョブを作成します。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：コードベースをGitでバージョン管理しつつ、ジョブやパイプラインのインフラストラクチャ定義（構成ファイル）もコード（YAML）として管理してCI/CDパイプライン経由で複数環境に確実・安全にデプロイするためのベストプラクティスは、Databricks Asset Bundles (DABs) を使用することです。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 40:\nメダリオンアーキテクチャにおいて、シルバー層 (Silver Layer) のテーブルを最も適切に説明しているのは、次のうちどれですか？",
        options: [
            "(A) このレイヤーのテーブル構造は、ソースシステムのテーブル構造に似ていますが、ロード時間や入力ファイル名などの追加のメタデータ列が含まれています。",
            "(B) 彼らはさまざまなソースから取り込んだ生データを保持しています。",
            "(C) これらは、生データをフィルタリング、クリーニング、および強化することで、より洗練された形で表示します。",
            "(D) 彼らは、分析、機械学習、および本番環境アプリケーションを支えるデータを維持管理している。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：シルバーテーブルは、ブロンズ層の生データをフィルタリング、クレンジング、重複排除し、必要に応じて他のテーブルと結合してデータを強化・統合した「クリーンで洗練されたマスターデータ」を提供するレイヤーです。(A) や (B) はブロンズ層の説明であり、(D) の高度に集計されたデータはゴールド層の説明です。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 41:\nデルタレイク (Delta Lake) について、以下の記述のうち正しくないものはどれですか？",
        options: [
            "(A) Delta Lakeは監査履歴とタイムトラベルを提供します。",
            "(B) Delta Lakeは、ParquetとXMLという標準的なデータフォーマットに基づいています。",
            "(C) Delta LakeはACIDトランザクション保証を提供します。",
            "(D) Delta Lakeは、拡張性の高いデータおよびメタデータ処理機能を提供します。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Delta Lakeの実データファイルはオープンフォーマットである「Parquet」形式で保存され、トランザクションログは「JSON」形式で記録されます。「XML形式に基づいている」という説明は誤りです。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 42:\nデータエンジニアは、企業データセンター内にホストされているオンプレミスのPostgreSQLデータベースからデータを読み取るための日次ジョブをスケジュールする必要があります。オンプレミスシステムへの信頼性の高い接続を確保するためには、適切なコンピューティングオプションを選択しなければなりません。\nデータエンジニアはどのコンピューティングタイプを使用すべきでしょうか？",
        options: [
            "(A) サーバーレスジョブコンピューティング",
            "(B) 従来のジョブコンピューティング (Classic Job Compute)",
            "(C) サーバーレスSQLウェアハウス",
            "(D) 汎用性の高いクラシックなクラスター (All-Purpose Compute)"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：企業のオンプレミスネットワークやプライベートリソースに直接アクセスするためには、お客様のクラウドアカウント（VNet/VPC）内にデプロイされる「従来のクラシックコンピューティング」が必要です。本番のスケジュールジョブであるため、コスト効率の良い「従来のジョブコンピューティング」が最適解です。サーバーレスコンピューティングはDatabricks側のネットワークで稼働するため、特殊な構成なしにオンプレミスへ直接アクセスすることはできません。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 43:\nSpark UIでは、1つのステージに500個のタスクが含まれています。ほとんどのタスクは20秒以内に完了しますが、非常に大きなパーティションを処理する一部のタスクは25分以上かかります。\nSparkでどのような問題が発生していますか？",
        options: [
            "(A) エグゼキュータのメモリリーク",
            "(B) データの偏り (Data Skew)",
            "(C) ネットワークタイムアウト",
            "(D) 小さなファイルの問題 (Small File Problem)"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：大部分のタスクはすぐに終わるのに、一部のタスクだけが極端に長時間かかっている場合、特定のキーやパーティションにデータが集中している「データの偏り (データスキュー)」が発生しているサインです。キーのソルト処理やパーティションの見直しで改善を図る必要があります。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 44:\nデータエンジニアが、フィーチャーブランチ上のDatabricks Gitフォルダ内のノートブックに変更を加えました。エンジニアは、これらの変更をメインブランチにマージしたいと考えています。\nこの操作を実行するための正しいワークフローは何ですか？",
        options: [
            "(A) DatabricksのGitフォルダ内でフィーチャーブランチをメインブランチにマージし、変更内容をコミットしてリモートのメインブランチにプッシュします。",
            "(B) 変更をコミットし、Databricks Gitフォルダ内のフィーチャーブランチをメインブランチにマージしてから、リモートのメインブランチに変更をプッシュします。",
            "(C) 変更内容をリモートのフィーチャーブランチにコミットしてプッシュし、GitHub UIまたはGitHub CLIを使用してプルリクエスト(PR)を作成します。",
            "(D) 変更内容をリモートのフィーチャーブランチにコミットしてプッシュし、その後、Databricks Repos UIを使用してプルリクエスト(PR)を作成します。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：DatabricksのGitフォルダー（旧: Repos）ではコミットやプッシュは可能ですが、UI上で「Pull Request (PR) の作成」や保護されたブランチへの「マージ処理」を行うことはできません。フィーチャーブランチをリモートにプッシュした後は、GitHubやGitLabなどの外部Gitプロバイダーの画面でPRを作成し、レビューを経てマージするのが正しいワークフローです。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 45:\n医療機関のデータエンジニアが、Delta Lake のテーブル `patient_records` を管理しています。このエンジニアは、`diagnosis` 列の値を医師のみが閲覧できるように、`diagnosis` 列をマスクするユーザー定義関数を作成したいと考えています。\nデータエンジニアは、以下のどの関数を使ってこれを実現できますか？",
        options: [
            "(A) CREATE FUNCTION patient_mask(diagnosis STRING)\n    RETURN CASE WHEN diagnosis IS NOT NULL THEN diagnosis ELSE 'CONFIDENTIAL' END;",
            "(B) CREATE FUNCTION patient_mask(diagnosis STRING)\n    RETURN CASE WHEN is_account_group_member('doctors') THEN 'CONFIDENTIAL' ELSE diagnosis END;",
            "(C) CREATE FUNCTION patient_mask(doctors STRING)\n    RETURN CASE WHEN is_account_group_member('diagnosis') THEN doctors ELSE 'CONFIDENTIAL' END;",
            "(D) CREATE FUNCTION patient_mask(diagnosis STRING)\n    RETURN CASE WHEN is_account_group_member('doctors') THEN diagnosis ELSE 'CONFIDENTIAL' END;"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：列マスク用の関数を作成する場合、現在のクエリ実行ユーザーが特定のグループ（ここでは 'doctors'）に所属しているかどうかを `is_account_group_member('doctors')` で判定します。所属している場合はそのままのデータ（diagnosis）を返し、それ以外のユーザーにはマスキングされた文字列（'CONFIDENTIAL'）を返すのが正しいロジックです。(B)はマスキングの対象が逆になってしまっています。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 46:\nローカルディレクトリに新しいアセットバンドル (DABs) プロジェクトを作成するには、どのDatabricks CLIコマンドを使用しますか？",
        options: [
            "(A) databricks bundle init",
            "(B) databricks bundle new",
            "(C) databricks bundle initialize",
            "(D) databricks bundle create"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：新しいDatabricks Asset Bundles (DABs) プロジェクトを初期化するための正しいコマンドは `databricks bundle init` です。これを実行すると、プロジェクトテンプレートを選択する対話形式のプロンプトが起動します。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 47:\nデータエンジニアは、Lakeflow Connectを使用して、サポートされているSaaSアプリケーションから顧客データをUnity Catalogで管理されるテーブルに段階的に取り込む必要があります。\nこのデータ取り込みを実現するには、Lakeflow Connectのどの設定手順が必要ですか？",
        options: [
            "(A) SaaSアプリケーションからCSVファイルをUnity Catalogボリュームにエクスポートし、COPY INTOコマンドを使用してエクスポートしたファイルをDeltaテーブルに増分ロードします。",
            "(B) SaaSアプリケーションからJSONファイルをUnity Catalogボリュームにエクスポートし、Auto Loaderを使用してエクスポートされたファイルをDeltaテーブルに増分的に書き込みます。",
            "(C) アプリケーションの認証情報を保存するUnity Catalog接続を選択し、宛先カタログとスキーマを構成し、スケジュールと通知を設定します。",
            "(D) アプリケーションの認証情報が保存されているUnity Catalog接続を選択し、次に外部カタログを設定してSaaSアプリケーションに直接アクセスし、データをロードします。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Databricks Lakeflow ConnectのSaaSコネクタは、完全に管理されたローコードソリューションです。手動でCSVやJSONをエクスポートしてAuto Loaderなどを記述する必要はありません。ウィザードに従って「認証情報を持つ接続の選択」「宛先カタログ・スキーマの設定」「スケジュールの設定」を行うだけで、継続的なデータ同期パイプラインが構成されます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 48:\nデータエンジニアリングチームは、クラウドストレージからCSVファイルをDeltaテーブルにロードしています (COPY INTO)。パイプラインの実行が失敗したため、一部のファイルは以前に部分的にしか取り込まれていませんでしたが、チームは既にロードされているかどうかに関わらず、すべてのファイルを再処理したいと考えています。\nすべてのファイルが確実に再取り込まれるようにするには、何を使用すべきでしょうか？",
        options: [
            "(A) COPY_OPTIONS('idempotency' = 'false')",
            "(B) COPY_OPTIONS('overwrite' = 'true')",
            "(C) COPY_OPTIONS('checkpointing' = 'false')",
            "(D) COPY_OPTIONS('force' = 'true')"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：COPY INTO コマンドはデフォルトで状態を記憶しており、一度読み込んだファイルはスキップします。既に取り込まれたファイルも含めて、ソース内のすべてのファイルを強制的に再読み込みして処理する場合は、`force = 'true'` (または `FORCE = true`) オプションを指定します。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 49:\nデータエンジニアが、オンラインストアへの訪問データを含むPySpark DataFrame dfを扱っています。各行は、顧客が商品ページを閲覧したことを表しており、user_id、product_id、timestampなどの列が含まれています。\n彼らは商品ビューレベルでの一意性を確保したいと考えており、つまり各ユーザーは商品ごとに1つのレコードしか持てないようにしたいと考えている。以下のPySparkコードのうち、このロジックを正しく実装しているのはどれですか？",
        options: [
            "(A) df.dropDuplicates([\"user_id\", \"product_id\", \"timestamp\"])",
            "(B) df.dropDuplicates([\"timestamp\"])",
            "(C) df.dropDuplicates([\"user_id\", \"product_id\"])",
            "(D) df.dropDuplicates()"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：「ユーザーごと」に「商品ごと」の重複を排除して1つのレコードだけを残すには、重複判定のキーとして \"user_id\" と \"product_id\" の両方を指定して `dropDuplicates` を実行する必要があります。タイムスタンプを含めてしまうと、閲覧時間が異なる同じ商品の履歴がすべて別物と判定されて重複排除されません。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 50:\nデータエンジニアがDatabricks Auto Loaderを使用して、以下のストリーミングデータ取り込みコードを実装しました。\nspark.readStream \\\n  .format(\"cloudFiles\") \\\n  .option(\"cloudFiles.schemaEvolutionMode\", \"failOnNewColumns\") \\\n  .load(...)\n受信するJSONファイルに、元のスキーマに含まれていない新しい列が現れた場合、このストリーミングジョブはどのような動作をすることが期待されますか？",
        options: [
            "(A) ストリームが失敗した場合、すべての新しい列は後で処理するために、救済されたデータ列に保存されます。",
            "(B) ストリームは失敗しますが、新しい列でスキーマを更新すると自動的に再起動します。",
            "(C) ストリームが失敗し、スキーマを手動で更新するか、問題のあるデータファイルを削除しない限り、再開されません。",
            "(D) ストリームは一時的に停止しますが、スキーマの更新を行わずに新しい列を無視することで処理を継続します。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：`cloudFiles.schemaEvolutionMode` が `failOnNewColumns` に設定されている場合、Auto Loaderは新しい列を検出すると直ちにストリーム処理を意図的に失敗させて停止します。エンジニアが意図しないスキーマ変更を防ぐための機能であり、スキーマを手動で更新する等して解決しない限り、ジョブは自動的には再開されません。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 51:\nデータエンジニアが、トラフィック量の多いウェブサイトのクリックストリームイベントのデータセットを分析しています。クリックストリームログとユーザープロファイルデータセットを結合する処理中に、少数のユーザーが不釣り合いに多くのイベントを生成していることが原因で、データに偏りが生じていることが確認されました。\nこのシナリオにおける歪みを軽減するための適切な解決策ではないアプローチは次のうちどれですか？",
        options: [
            "(A) 結合前に、クリックストリームデータセットを再分割してパーティション数を増やします。",
            "(B) 結合処理中のシャッフルを避けるため、偏ったキーをすべてのワーカーノードにブロードキャストします。",
            "(C) 使用頻度の高いユーザーを専用ジョブで処理することで、キーの偏りを個別に処理する。",
            "(D) 偏ったuser_id値にランダムな接頭辞を付加することでソルト処理を行い、パーティション間で負荷を分散させます。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：ブロードキャスト結合は、通常、小さなルックアップテーブルを共有してシャッフルを避けるための最適化手法です。一部の巨大なキー（偏ったキー群）を含む大規模なテーブルそのものをブロードキャストしようとすると、メモリ不足（OOMエラー）を引き起こす可能性が高く、偏りの根本的な解決策にはなりません。ソルト処理や再分割（repartition）などが適切なアプローチです。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 52:\nデータエンジニアリングチームは、以下の宣言型自動化バンドル (DABs) 構成を使用しています。\nvariables:\n schema_name:\n   default: demo_schema\n\nデータエンジニアは、以下の方法でバンドルをデプロイします。\ndatabricks bundle deploy -t dev --var=\"schema_name=finance_schema\"\nその後、以下を使用してジョブを実行します。\ndatabricks bundle run -t dev sales_job --var=\"schema_name=marketing_schema\"\n\nジョブ実行中にノートブックパラメータ schema_name にはどのような値が渡されますか？",
        options: [
            "(A) demo_schema",
            "(B) finance_schema",
            "(C) marketing_schema",
            "(D) 変数をバンドル実行に渡すことができないため、実行は失敗します。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Databricks Asset Bundlesにおいて、`--var` フラグによる変数の評価と値の置換は「デプロイ時（deploy時）」に行われ、Databricksワークスペース上のジョブ定義にハードコーディングされます。そのため、後から `run` コマンドで引数を渡してもジョブの基本構成は上書きされず、デプロイ時に確定した `finance_schema` が適用されて実行されます。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 53:\nデータエンジニアリングチームは、Databricks SQLで2つのデータセット間のレコードを比較し、一致する行を返しています。この比較では、両方のデータセットに存在するNULL値は等しいものとして扱う必要があります。\nDatabricks SQLにおいて、null安全な等価性を満たすクエリはどれですか？",
        options: [
            "(A) SELECT a.order_id, b.order_id FROM orders_a a INNER JOIN orders_b b ON a.order_id <=> b.order_id;",
            "(B) SELECT a.order_id, b.order_id FROM orders_a a INNER JOIN orders_b b ON a.order_id = b.order_id;",
            "(C) SELECT a.order_id, b.order_id FROM orders_a a INNER JOIN orders_b b ON a.order_id <> b.order_id;",
            "(D) SELECT a.order_id, b.order_id FROM orders_a a INNER JOIN orders_b b ON a.order_id = b.order_id AND (a.order_id IS NULL OR b.order_id IS NULL);"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Databricks SQLで「Nullセーフな等価演算子」を使用するには `<=>` を使用します。標準の `=` では NULL と NULL の比較は NULL（False扱い）となりますが、`<=>` を使用すると両方が NULL の場合も True として結合が成立します。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 54:\nデータエンジニアが人事チームにemployeesテーブルに対する完全な権限を付与するために使用できるコマンドは次のうちどれですか？",
        options: [
            "(A) GRANT ALL PRIVILEGES ON TABLE employees TO hr_team",
            "(B) GRANT SELECT, MODIFY, CREATE, READ_METADATA ON TABLE employees TO hr_team",
            "(C) GRANT ALL PRIVILEGES ON employees TO hr_team",
            "(D) GRANT FULL PRIVILEGES ON TABLE employees TO hr_team"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Unity Catalogにおいて、特定のオブジェクトに対する完全なアクセス権限（すべての権限）を指定のグループに付与するための正しい標準SQL構文は GRANT ALL PRIVILEGES ON <オブジェクトタイプ> <オブジェクト名> TO <プリンシパル>; です。"
    },
    {
        course: "exam1",
        category: "模擬試験",
        question: "問題 55:\n小売企業のデータアナリストは、オンラインストアからLakeflow (Delta Live Tables) を使用して取り込んだデータを元に、日次レポートを作成します。アナリストは、総収益、平均注文額、カテゴリ別の販売数量など、ビジネスレベルの集計値を効率的に事前計算できるリレーショナルオブジェクトを作成する必要があります。これにより、下流のダッシュボードが毎回再計算することなく、迅速にデータにアクセスできるようになります。\nこのユースケースに最も適したオブジェクトは次のうちどれですか？",
        options: [
            "(A) 一時ビュー (Temporary view)",
            "(B) マテリアライズドビュー (Materialized view)",
            "(C) ストリーミングテーブル (Streaming table)",
            "(D) ストリーミングビュー (Streaming view)"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：集計済みの結果をストレージに事前計算して保存し、ダッシュボードのクエリを毎回計算するオーバーヘッドから解放するのに最適なオブジェクトは「マテリアライズドビュー (Materialized View)」です。元データが更新された際も効率的に再計算・更新されます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 1:\nデータエンジニアは、transactions という名前の既存の Delta テーブルで transaction_id と transaction_date がnullにならないようにする必要があります。どのSQL文がこれらの制約を正しく追加しますか?",
        options: [
            "(A) ALTER TABLE transactions CHECK(transaction_id IS NOT NULL);\nALTER TABLE transactions CHECK(transaction_date IS NOT NULL);",
            "(B) ALTER TABLE transactions ALTER COLUMNS (transaction_id, transaction_date) SET NOT NULL;",
            "(C) ALTER TABLE transactions ALTER COLUMN transaction_id SET NOT NULL;\nALTER TABLE transactions ALTER COLUMN transaction_date SET NOT NULL;",
            "(D) ALTER TABLE transactions CHECK(transaction_id IS NOT NULL AND transaction_date IS NOT NULL);"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Delta Lakeでは、列の null 許容制約を管理するための正しいネイティブなアプローチは `ALTER TABLE ... ALTER COLUMN ... SET NOT NULL` コマンドを使用することです。各列には個別のステートメントが必要です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 2:\n以下の構造化ストリーミングクエリを前提とします。\n( spark.table(\"orders\")\n    .withColumn(\"total_after_tax\", col(\"total\") + col(\"tax\"))\n    .writeStream\n    .option(\"checkpointLocation\", checkpointPath)\n    .outputMode(\"append\")\n    .___________\n    .table(\"new_orders\") )\n\n空欄を埋めて、クエリが複数のマイクロバッチを実行して利用可能なすべてのデータを処理し、その後トリガーを停止するようにします。",
        options: [
            "(A) trigger(once=True)",
            "(B) trigger(processingTime=\"0f\")",
            "(C) trigger(micro-batches=True)",
            "(D) trigger(availableNow=True)"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Spark Structured Streamingでは、`trigger(availableNow=True)` を設定することで、現在ソースで利用可能なすべてのデータを（必要に応じて複数のマイクロバッチに分割して）処理し、処理が完了するとストリームを自動的に停止します。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 3:\nデータエンジニアが、Auto Loader を使用したスト​​リーミングデータ取り込みパイプラインを設計しています。要件は、スキーマ変更時にパイプラインが失敗しないこと、そしてデータに新しく追加された列をすべて取得し、後で検査できるようにすることです。\nこの要件を満たすために、エンジニアは以下のどのスキーマ進化モードを使用すべきでしょうか？",
        options: [
            "(A) failOnNewColumns (新規列で失敗)",
            "(B) none (なし)",
            "(C) rescue (レスキュー)",
            "(D) addNewColumns"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Auto Loader の `rescue` (レスキュー) モードを使用すると、新しい列が追加されてもストリームは失敗せず、未知の新しい列データは「レスキューされたデータ列 (_rescued_data)」に格納されます。これにより、ストリームを中断することなく後から新しいデータ要素を検査できます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 4:\nデータエンジニアがDatabricksのファイルアップロードUIを使用して、CSVファイルをUnity Catalog管理の新しいテーブルに取り込もうとしています。ファイルアップロードUIは列の型を自動的に検出しますが、エンジニアはスキーマの推論ミスを避けるため、すべての列を STRING データ型で作成したいと考えています。\n以下の選択肢のうち、この要件を最も満たすものはどれですか?",
        options: [
            "(A) 操作は不要です。すべてのCSV列はデフォルトでSTRINGデータ型で作成されます。",
            "(B) ヘッダーのドロップダウンを使用して推論されたスキーマを編集し、すべての列をSTRINGに設定します。",
            "(C) ファイルアップロードUIには、推論された列のデータ型を更新する設定がありません。",
            "(D) 詳細属性で、「列の型を自動的に検出する」設定を無効にします。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：DatabricksのUIでファイルをアップロードする際、「列の型を自動的に検出する (Automatically detect column types)」設定を無効にすると、自動スキーマ推論が停止し、安全のためにすべての列が一律で STRING データ型として読み込まれます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 5:\nDatabricks Jobs において、有効なタスクタイプではないものはどれですか？",
        options: [
            "(A) if/else条件",
            "(B) REST API呼び出し",
            "(C) SQLクエリ",
            "(D) python wheel"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Databricks Jobsのタスクタイプには、Python wheel、SQLクエリ、Notebook、If/else条件などが存在しますが、「REST API呼び出し」というタスクタイプはネイティブには存在しません（必要であればPythonスクリプト等から実行する必要があります）。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 6:\nデータエンジニアリングチームは、受信するIoTセンサーデータのストリーミングワークロードを処理するLakeflowジョブを構築します。チームは、処理を可能な限り低いレイテンシで実行し、ジョブを無期限に継続する必要があります。\nこの作業には、チームはどのようなトリガー設定を使用すべきでしょうか？",
        options: [
            "(A) 連続トリガー (Continuous Trigger)",
            "(B) スケジュールされたトリガー",
            "(C) テーブル更新トリガー",
            "(D) ファイル到着トリガー"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：連続トリガー (Continuous Trigger) は、前のジョブが完了または失敗した直後に新しいジョブを再起動し、ジョブを無期限に常時実行させます。これにより、IoTデータのようなストリーミングワークロードに対して、可能な限り低いレイテンシで継続的な処理を実現できます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 7:\nデータエンジニアは、次の PySpark コードを使用して DataFrame df を変換します。\ndf.na.fill({\"source\": \"unknown\"})\n以下の記述のうち、この変化を最もよく表しているのはどれですか？",
        options: [
            "(A) source 列のNULL値には「unknown」という値が割り当てられます。",
            "(B) source 列のすべての値には「unknown」という値が割り当てられます。",
            "(C) source=\"unknown\" の行は除外されます。",
            "(D) source=\"unknown\" の行は null 値に変換されます。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：PySpark の `df.na.fill()` に辞書（`{\"source\": \"unknown\"}`）を渡すと、指定された列 (`source`) に存在する NULL（欠損値）のみを対象に、指定した値 (`unknown`) で置き換えます。NULL以外の既存データは変更されません。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 8:\nデータエンジニアリングチームは、本番環境で複数のタスクを実行するジョブを運用しています。ジョブが失敗した場合、チームメンバーに通知する必要があります。\nジョブが失敗した場合にチームメンバーにメールを送信するには、次のうちどの方法が使用できますか？",
        options: [
            "(A) Job API を使用することで、各タスクのステータスに応じてプログラムでメールを送信できます。",
            "(B) ジョブが失敗した場合にユーザーに通知する方法はありません。",
            "(C) Jobs UI (ジョブページ) でメール通知設定を構成できます。",
            "(D) ジョブの失敗時に通知を受け取るように設定できるのは、ジョブの所有者のみです。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Databricks JobsのUI（ジョブページ）には、ジョブの開始、成功、失敗などのイベントに基づいて指定したメールアドレス等に通知を送信する「ジョブ通知」設定機能が標準で備わっています。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 9:\nデータエンジニアが、Azure Data Lake Storageから新しいファイルを段階的に取り込むパイプラインを構築しています。ワークロードは中程度で、ファイルの到着間隔は不規則です。組織は、外部イベントサービスに依存しない、最もシンプルな構成を求めています。\nデータエンジニアはどのデータ取り込み方法を選択すべきでしょうか？",
        options: [
            "(A) 1分ごとに実行されるcronジョブで COPY INTO コマンドを使用してください。",
            "(B) ストリーミング取り込みを使用し、手動チェックポイントの状態をデルタテーブルに保存します。",
            "(C) イベントベースのファイル検出をサポートするには、ファイル通知を有効にした状態でAuto Loaderを使用してください。",
            "(D) Auto Loader をディレクトリ一覧表示 (Directory Listing) モードで使用して、ストレージコンテナを定期的にスキャンし、新しいファイルを探してください。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：外部のイベントサービス（Event Gridなど）に依存せず、最もシンプルに設定できるのは、Auto Loaderのデフォルトである「ディレクトリ一覧表示モード」です。不規則な間隔と中程度のワークロードであれば、`Trigger.AvailableNow` を組み合わせて定期的にスキャンさせるだけで効率的に処理できます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 10:\nデータエンジニアリングチームは、大規模な外部テーブルを管理対象テーブルに移行したいと考えています。上級データエンジニアは、`ALTER TABLE ... SET MANAGED` コマンドを使用することを提案しました。\nこの変換にこの方法を用いる主な利点は何ですか？",
        options: [
            "(A) テーブルの履歴を保持し、外部テーブルへのロールバックをサポートします。",
            "(B) テーブル名、設定、権限、ビューなど、テーブルの構成はそのまま維持されます。",
            "(C) 実行ごとに、ソースからターゲットへの変更を段階的に同期します。",
            "(D) 最新のテーブルバージョンのみをコピーすることで、移行中のダウンタイムを最小限に抑えます。",
            "(E) 変換後、ストレージコストを節約するために、元の外部ストレージの場所を即座に削除します。"
        ],
        answerIndex: [0, 1],
        explanation: "解答：(A),(B)\n\n解説：`ALTER TABLE ... SET MANAGED` の最大の利点は、テーブルの履歴（タイムトラベル）が完全に保持され `UNSET MANAGED` で安全にロールバックできること、および、Unity Catalogの権限、タグ、関連ビューなどのメタデータ構成がすべてそのまま維持されることです。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 11:\nデータエンジニアは、複数の地域にわたる顧客情報（メールアドレスや電話番号など）を含むUnity Catalogテーブルを作成する任務を負っています。組織は、ユーザーがテーブルを照会できる一方で、適切なアクセス権限を持たないユーザーには個人識別情報（PII）が漏洩しないようにしたいと考えています。\nエンジニアは、この要件を効率的に履行するために、どの方法を用いるべきでしょうか？",
        options: [
            "(A) 列マスク (Column Mask) を適用して、きめ細かなアクセス制御を設定します。",
            "(B) テーブルオブジェクトの権限を使用して、機密性の高い個人情報列へのアクセスを取り消します。",
            "(C) 行レベルフィルターを使用して、地域固有の顧客のみにアクセスを制限します。",
            "(D) 動的ビューを使用して、機密性の高い個人情報列を墨消しします。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：特定の列（メールアドレスなど）の機密データをユーザーの役割に基づいて動的に隠す（マスクする）ための専用かつ最も効率的なセキュリティ機能は、Unity Catalogの「列マスク (Column Masking)」です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 12:\n「小さなテーブルのコピーをクラスタのすべてのノードにキャッシュし、クラスタの存続期間中のすべてのクエリで使用することで、データのシャッフルを排除する最適化手法」\n上記の記述で説明されているのは、次のうちどれですか？",
        options: [
            "(A) ブロードキャスト結合 (Broadcast Join)",
            "(B) OPTIMIZE (最適化)",
            "(C) デルタキャッシング (Delta Cache)",
            "(D) クロス結合 (Cross Join)"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：小さいテーブル全体をすべてのワーカーノードにコピー（ブロードキャスト）し、コストの高いネットワークシャッフルを回避しながら大きなテーブルとローカルで結合するSparkの最適化手法は「ブロードキャスト結合 (Broadcast Join)」です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 13:\nある金融サービス会社は、オンプレミスのPostgreSQLデータベースからDatabricksプラットフォームへ、夜間に収集されるアカウントデータを移行したいと考えています。取り込まれたレコードは、管理対象のUnity Catalogテーブルに保存する必要があり、同時にコンプライアンス監査のための自動的なデータリネージ追跡機能も維持する必要があります。\nこれらの要件を最も満たす実装はどれですか？",
        options: [
            "(A) \njdbc_url = \"jdbc:postgresql://db-host:5432/finance\"\ncredentials = {\"user\": \"<user_name>\", \"password\": \"<password>\"}\ndf = spark.read.jdbc(url=jdbc_url, table=\"main.accounts\", properties=credentials)\ndf.write.mode(\"overwrite\").saveAsTable(\"finance.main.accounts\")",
            "(B) \nspark.readStream.format(\"postgresql\")...load().writeStream...toTable(\"finance.main.accounts\")",
            "(C) \nCREATE OR REPLACE TABLE finance.main.accounts AS SELECT * FROM postgresql.`db-host:5432/finance/main/accounts`",
            "(D) \nCOPY INTO finance.main.accounts FROM 'db-host:5432/finance' FILEFORMAT = TABLE..."
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：PostgreSQLからデータを読み込み、Unity Catalogのリネージ追跡を維持しながら管理対象テーブルに保存する正しいアプローチは、PySparkの `spark.read.jdbc` を使用してデータを読み込み、`saveAsTable` でUnity Catalogの3レベル名前空間（catalog.schema.table）に書き込む方法です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 14:\nDatabricks Asset Bundleの databricks.yml ファイル内の targets セクションの主な目的は何ですか？",
        options: [
            "(A) ワークスペースのユーザーロールとアクセスポリシーを定義する",
            "(B) バンドルに必要な外部ライブラリを一覧表示する",
            "(C) Databricks Runtimeのバージョンを設定する",
            "(D) それぞれの構成を持つ異なるデプロイ環境 (開発、本番など) を指定する"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：`targets` セクションは、DABsにおいて複数のデプロイ環境（開発環境、ステージング環境、本番環境など）を定義し、各環境ごとのワークスペースURLや上書きパラメータを設定するために使用されます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 15:\n/path/inputにある CSV ファイルのデータを使用してテーブルを正常に作成するには、以下の空欄を埋めてください。\n\nCREATE TABLE my_table\n(col1 STRING, col2 STRING)\n____________\nOPTIONS (header = \"true\", delimiter = \";\")\nLOCATION \"/path/input\"",
        options: [
            "(A) USING CSV",
            "(B) USING DELTA",
            "(C) FROM CSV",
            "(D) AS CSV"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：外部の場所に保存されているCSVファイルを直接参照する外部テーブルを作成する場合、フォーマットを明示するために `USING CSV` 句を指定する必要があります。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 16:\nデータエンジニアが `df.collect()` を大規模な Spark DataFrame に対して実行したところ、ドライバのメモリ不足エラー (OOM) でジョブが失敗しました。最も可能性の高い原因は何ですか？",
        options: [
            "(A) spark.driver.memory が収集したデータを保持するには不十分であるため",
            "(B) spark.memory.fraction が高すぎるため",
            "(C) spark.sql.autoBroadcastJoinThreshold が高すぎるため",
            "(D) spark.executor.cores が低すぎるため"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：`df.collect()` は、分散処理されているすべてのデータを単一の「ドライバーノード」のメモリに強制的に集約します。データセットのサイズがドライバープロセスに割り当てられたメモリ (`spark.driver.memory`) を超えた場合、Javaヒープ領域が枯渇して OOM エラーが発生します。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 17:\nLakeflow Connectにおいて、管理型取り込みコネクタ (Managed Connectors) に関して、次のうち正しくない記述はどれですか？",
        options: [
            "(A) マネージドコネクタは、効率的な増分読み取りと書き込みを活用することで、データ取り込みをより高速かつスケーラブルに、そしてコスト効率よくします。",
            "(B) 結果として得られるデータ取り込みパイプラインは、Unity Catalogによって管理され、サーバーレスコンピューティングとLakeflow Spark Declarative Pipelinesによって駆動されます。",
            "(C) マネージドコネクタは、エンタープライズデータベースおよびSaaSアプリケーションからのデータ取り込みをサポートします。",
            "(D) マネージドコネクタでは、認証フロー全体、データ更新ロジック、およびネットワーク要求を処理するために、カスタムのPythonコードを記述する必要があります。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Lakeflow Connectのマネージドコネクタは「ノーコード/ローコード」のソリューションであり、Databricksがバックエンドで認証、APIのページネーション、データ更新ロジックを自動処理します。そのため、ユーザーがカスタムのPythonコードを記述する必要があるという記述は誤りです。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 18:\nデータアナリストが、機密性の高い企業データを分析するために、Databricksワークスペース内にPythonノートブックを作成します。アナリストは、このノートブックがプラットフォーム内でどのように、どこに保存されるのかを懸念しています。\nDatabricksアーキテクチャ内でノートブックはどこに保存されますか？",
        options: [
            "(A) コントロールプレーン内において、安全に保管され暗号化されたワークスペースオブジェクトとして",
            "(B) データプレーン内の Delta Lake テーブルとして",
            "(C) 計算プレーンにおいて、Sparkクラスタファイルシステム内部に",
            "(D) Unity Catalogにおいて暗号化されたデータアセットとして保存されます"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Databricksのアーキテクチャにおいて、ノートブックのソースコードやワークスペースのオブジェクトは、Databricksが管理する「コントロールプレーン」に暗号化されて安全に永続保存されます。実際のデータ処理のみが顧客のクラウドアカウント（データプレーン）のクラスター上で実行されます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 19:\nデータエンジニアが、カタログ「analytics」の「events」スキーマにある「source_files」という名前のUnity CatalogボリュームにJSONファイルをアップロードしました。このエンジニアは、Spark SQLを使用してこのファイルを直接クエリしたいと考えています。\n以下のコマンドのうち、JSONファイルを正しく読み込むのはどれですか？",
        options: [
            "(A) SELECT * FROM json.`/Volumes/analytics/events/source_files/transactions.json`",
            "(B) SELECT * FROM json.`s3://source_files/events/analytics/transactions.json`",
            "(C) SELECT * FROM json.`dbfs:/FileStore/analytics/events/source_files/transactions.json`",
            "(D) SELECT * FROM json.`/Volumes/source_files/events/analytics/transactions.json`"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Unity Catalogボリューム内のファイルにアクセスするための標準的なパス構造は `/Volumes/<カタログ名>/<スキーマ名>/<ボリューム名>/<ファイルパス>` です。したがって、`/Volumes/analytics/events/source_files/transactions.json` が正解です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 20:\n「Apache Sparkにおける最適化手法の一つで、実行時統計情報を活用して最も効率的なクエリ実行プランを選択する。シャッフルパーティションの調整、結合戦略の切り替え、データスキューのリアルタイム処理などによりパフォーマンスを向上させる。」\n上記の記述で説明されているのは、次のうちどれですか？",
        options: [
            "(A) Adaptive Query Execution (AQE)",
            "(B) Photon Engine",
            "(C) Liquid Clustering",
            "(D) Predictive Optimization"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：アダプティブクエリ実行（AQE）は、クエリ実行中に得られた実際のデータサイズや統計情報に基づいて、結合戦略（ソートマージ結合からブロードキャスト結合への切り替えなど）やシャッフルパーティションを動的に再最適化するSparkのコア機能です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 21:\nグローバル銀行のデータエンジニアが、Delta Lakeテーブル customer_accounts を管理しています。不正検出部門のアナリストのみが実際の値を閲覧できるように、credit_card列にマスクを適用したいと考えています。これを実現するために、以下のユーザー定義関数を実装しました。\n\nCREATE FUNCTION card_mask ( credit_card STRING )\n  RETURN CASE WHEN is_account_group_member ( 'FraudDetectionDept' ) THEN credit_card ELSE '****-****-****-****' END ;\n\nデータエンジニアは、どのコマンドを使用して、この機能をテーブルの列マスクとして適用できますか？",
        options: [
            "(A) ALTER TABLE customer_accounts ALTER COLUMN credit_card SET MASK card_mask;",
            "(B) ALTER TABLE customer_accounts SET MASK card_mask ON (credit_card);",
            "(C) テーブル customer_accounts の列 credit_card にマスク card_mask を設定します。",
            "(D) ALTER TABLE customer_accounts SET MASK card_mask;"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：テーブルの特定の列に対して作成済みのマスキング関数を適用するための正しいSQL構文は `ALTER TABLE <テーブル名> ALTER COLUMN <列名> SET MASK <関数名>;` です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 22:\nデータエンジニアリングチームは、会社のサービスレベル契約（SLA）を満たすために、下流のGoldテーブルを15分ごとに更新したいと考えています。\n計算コストとDBU消費量を最小限に抑えつつ、この作業にはどのトリガー構成を使用すべきでしょうか？",
        options: [
            "(A) ファイル到着トリガー",
            "(B) テーブル更新トリガー",
            "(C) スケジュールされたトリガー (Scheduled Trigger)",
            "(D) 連続トリガー"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：15分といった明確な間隔のSLAがあり、かつ「コストを最小限に抑えたい」場合、クラスターを常に稼働させるイベントトリガーや連続トリガーではなく、スケジュールトリガーを使用して必要な時だけジョブクラスターを起動し、処理完了後に終了させるのが最も費用対効果が高い方法です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 23:\n大規模なDatabricksジョブが、構成ファイルが見つからないため、15タスク中12タスク目で失敗しました。この問題を解決した後、ワークフローを再開するために最も適切なアクションは何ですか？",
        options: [
            "(A) 次のスケジュールされた実行まで待つ",
            "(B) ジョブ全体を最初から再実行する",
            "(C) タスク12に関連付けられたノートブックを手動で実行する",
            "(D) タスク12からの「修復して実行 (Repair and Run)」を行う"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Databricks Jobsの「Repair and Run（修復して実行）」機能を使用すると、すでに成功したタスクを無駄に再実行することなく、失敗したタスクおよびその下流のタスクだけを再実行できます。これにより復旧に必要な時間とコンピュートリソースを節約できます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 24:\nジュニアデータエンジニアは、ソース管理にDatabricks Notebooksの組み込みバージョン管理機能を使用している。シニアデータエンジニアは、代わりにGitフォルダを使用することを推奨した。\n以下のうち、Databricks Notebooksのバージョン管理ではなくGitフォルダーの使用が推奨される理由を説明できるものはどれですか？",
        options: [
            "(A) Gitフォルダは、複数のユーザーが同じノートブックを編集する際に、自動的な競合解決をサポートします。",
            "(B) Gitフォルダは、ノートブックのすべての変更をリアルタイムでリモートGitリポジトリに自動的に同期します。",
            "(C) Gitフォルダは、一元化されたセキュリティとガバナンスのためにUnity Catalogにソースコードファイルを保存します。",
            "(D) Gitフォルダは、開発作業のためのブランチの作成と管理をサポートします。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Databricks Notebookの組み込み履歴機能にはブランチの概念がありません。Gitフォルダ（Repos）を使用する最大の利点の1つは、Gitの標準的な機能である「ブランチ（フィーチャーブランチなど）」を作成・管理して、チーム開発における並行作業やコードレビュー（プルリクエスト）を可能にすることです。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 25:\nデータエンジニアがDatabricks SQLパイプラインで受信トランザクションデータを検証しています。一部のレコードの数値フィールドに予期しない記号が含まれています。エンジニアは次のクエリを実行します。\n\nSELECT CAST('100$' AS INT);\n\nこのクエリの結果を最も適切に表しているのは、次のうちどれですか？",
        options: [
            "(A) 100ドル",
            "(B) エラーが発生しました",
            "(C) NULL",
            "(D) 100"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：標準の `CAST` 関数では、ターゲット型（INT）として無効な文字（$記号など）が含まれる文字列を変換しようとすると、クエリは直ちに失敗して実行時エラー（CAST_INVALID_INPUT例外）をスローします。エラーを出さずにNULLを返したい場合は `TRY_CAST` を使用する必要があります。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 26:\nデータエンジニアリングチームは、メダリオンアーキテクチャのシルバーレイヤーを使用して、顧客データを外部ルックアップテーブルと結合し、フィルタを適用しています。\nチームメンバーがシルバーレイヤーについて以下の主張をしています。これらの主張のうち、誤っているのはどれですか？",
        options: [
            "(A) Silver Layerは、データエンリッチメントのために他のソースと統合されます。",
            "(B) シルバーレイヤーには、ソースファイルの詳細情報と取り込みタイムスタンプが付加された生データが格納されます。",
            "(C) シルバーレイヤーはデータ重複排除を処理します",
            "(D) シルバーレイヤーは、データのクレンジングとフィルタリングを担当します。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：「ソースファイルの詳細やタイムスタンプが付加されただけの生データ」が格納されるのは、シルバーレイヤーではなく「ブロンズレイヤー」です。シルバーレイヤーは、その生データをクレンジング・フィルタリング・重複排除・統合（エンリッチメント）したデータを保持します。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 27:\nデータエンジニアがDatabricksプラットフォームでタスクオーケストレーションに使用できるサービスは、次のうちどれですか？",
        options: [
            "(A) Unity Catalogのデータリネージ",
            "(B) Databricks Connect",
            "(C) Delta Live Tables",
            "(D) Databricks Jobs (ワークフロー)"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：複数のタスク（ノートブックやPythonスクリプト等）を有向非巡回グラフ (DAG) としてスケジュール実行およびオーケストレーションするための機能は「Databricks Jobs（Databricks ワークフロー）」です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 28:\nデータエンジニアがデルタテーブルの古いデータファイルを削除するために使用できるコマンドは次のうちどれですか？",
        options: [
            "(A) OPTIMIZE (最適化)",
            "(B) VACUUM (真空)",
            "(C) CLEAN",
            "(D) ERASE"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Delta Lakeにおいて、テーブルの更新・削除によって発生した「参照されなくなった古い履歴データファイル」を物理的に削除してストレージ領域を解放するコマンドは `VACUUM` です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 29:\nデータエンジニアは、2つのテーブルからデータを取得してリレーショナルオブジェクトを作成したいと考えています。このリレーショナルオブジェクトは、現在のセッションでのみ使用されます。ストレージコストを削減するため、データエンジニアは物理データのコピーと保存を避けたいと考えています。\nデータエンジニアは、次のうちどのリレーショナルオブジェクトを作成すべきでしょうか？",
        options: [
            "(A) グローバル一時ビュー (Global Temporary View)",
            "(B) 管理対象テーブル (Managed Table)",
            "(C) 外部テーブル (External Table)",
            "(D) 一時ビュー (Temporary View)"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：物理データをストレージにコピーせずにクエリを保存するオブジェクトは「ビュー」です。さらに「現在のセッションでのみ使用される」という要件を満たすのは、Sparkセッションが終了すると自動的に破棄される「一時ビュー (Temporary View)」です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 30:\nデータエンジニアは、オブジェクトクラウドストレージからJSONファイルを段階的に取り込むために、以下のオートローダーストリームを使用しています。\n\ndf = ( \n   spark.readStream\n        .format(\"cloudFiles\")\n        .option(\"cloudFiles.format\", \"json\") \n        .option(\"cloudFiles.schemaLocation\", path)\n        .option(\"cloudFiles.inferColumnTypes\", \"true\") \n        .load(input_path)\n)\n\n次の選択肢のうち、オプション(\"cloudFiles.inferColumnTypes\", \"true\")を正しく説明しているのはどれですか？",
        options: [
            "(A) これにより、JSONデータから関係列の型（主キーや外部キーなど）を推論することが可能になります。",
            "(B) 推論されたすべての列を文字列として扱うように強制することで、バッチ間でスキーマの一貫性を確保します。",
            "(C) これにより、JSONデータから正確なデータ型（整数、ブール値、タイムスタンプなど）を推論することが可能になります。",
            "(D) これにより、スキーマの進化が自動的に有効になり、推論されたデータ型を持つ新しい列が追加されます。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：JSONのようなテキスト形式のデータを取り込む際、Auto Loaderはデフォルトですべての列を「String（文字列）」として安全に推論します。`cloudFiles.inferColumnTypes = true` を設定するとこのデフォルト動作が変更され、実際のデータ値に基づいて正確なデータ型（Int, Float, Boolean, Timestampなど）を推論するようになります。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 31:\n「Databricks Intelligence Platformが提供する基盤技術の一つは、データレイクに信頼性をもたらすオープンソースのファイルベースストレージフォーマットです。」\n上記の記述で説明されている技術はどれですか？",
        options: [
            "(A) Delta Live Tables (DLT)",
            "(B) Unity Catalog",
            "(C) Apache Spark",
            "(D) Delta Lake (デルタレイク)"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：データレイクにACIDトランザクションの信頼性をもたらすファイルベースのオープンソース・ストレージフォーマットは「Delta Lake」です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 32:\nデータエンジニアがテーブルの所有者 (Owner) を変更できる場所は、次のうちどれですか？",
        options: [
            "(A) Catalog Explorer (データエクスプローラー) のテーブル詳細ページにある「所有者 (Owner)」フィールドから",
            "(B) Catalog Explorer では、所有者はデータベースレベルで設定されるためデータベースページの「アクセス許可」タブで",
            "(C) Catalog Explorer では、所有者はデータベースレベルで設定されるためデータベースページの所有者フィールドから",
            "(D) Catalog Explorer で、テーブルページの「権限 (Permissions)」タブから"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：DatabricksのCatalog Explorerにおいて、テーブルの所有権はテーブルの詳細（Details）画面の上部にある「Owner（所有者）」フィールドをクリックして編集することで変更できます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 33:\nあるeコマース企業は、季節的なトラフィックの急増により、データ量が急速に増加しています。同社のエンジニアリングチームは、ピーク時であってもバッチ処理ジョブが一定の時間内に完了するようにする必要があります。しかし、インフラ管理のための人的リソースが限られているため、自動スケーリングと最適化機能を備えたソリューションを求めています。\nこれらの条件を最もよく満たす選択肢はどれですか？",
        options: [
            "(A) Photonが有効になっている専用クラスター",
            "(B) Databricksのサーバーレスコンピューティング (Serverless Compute)",
            "(C) 自動スケーリングが有効になっている汎用クラスター",
            "(D) 最大リソース割り当てのジョブクラスタ"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：人的リソースが限られておりインフラ管理を最小限に抑えつつ、急増するトラフィックに対してシームレスに自動スケーリングさせたい場合、Databricksがインフラストラクチャを完全管理する「サーバーレスコンピューティング」が最適です。事前プロビジョニングなしで高需要に即座に対応できます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 34:\nデータエンジニアは、Lakeflow Declarative Pipelines（旧Delta Live Tables）を使用して、ほぼリアルタイムのデータ取り込みを効率的に処理するETLパイプラインを設計する任務を負っています。目標は、Auto Loaderを使用して受信データストリームを段階的に処理し、データパイプラインが新しいレコードが到着するたびに継続的にキャプチャしてロードできるようにし、同時に高いパフォーマンスと信頼性を維持することです。\n以下のオブジェクトのうち、この特定のユースケースに最も適しているのはどれでしょうか？",
        options: [
            "(A) ストリーミングテーブル (Streaming table)",
            "(B) ストリーミングビュー",
            "(C) 一時ビュー (Temporary view)",
            "(D) マテリアライズドビュー (Materialized view)"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：DLT（Declarative Pipelines）において、Auto Loaderなどから到着する新しいレコードを継続的・増分的に処理してリアルタイムのデータ取り込みをサポートするオブジェクトは「ストリーミングテーブル (Streaming Table)」です。マテリアライズドビューはバッチ的な集計・再計算に向いています。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 35:\nデータエンジニアが、失敗を伴いながらも成功した以下のジョブ実行について調査します。\nTask_A(成功) --\n                  |→ Task_C(成功) \nTask_B(失敗) --\n\nすべてのタスクが成功したわけではないにもかかわらず、ジョブが正常に実行された理由を説明しているのは、次のうちどれですか？",
        options: [
            "(A) タスク A は run_if: 少なくとも 1 つの成功 に設定されている",
            "(B) タスク B は run_if: 少なくとも 1 つの失敗 に設定されている",
            "(C) タスク C は run_if: 少なくとも 1 つの失敗 に設定されている",
            "(D) すべてのタスクは run_if: すべて完了 に設定されている"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：タスクCはタスクAとタスクBの両方に依存しています。Task_Bが失敗したため、デフォルトの「すべて成功」条件であればTask_Cはスキップまたは失敗扱いになります。しかしTask_Cが正常に実行・成功しているということは、Task_Cの実行条件が `run_if: at_least_one_failed` (少なくとも1つの上流タスクが失敗) 等に設定されていたため、Task_Bの失敗をトリガーとして実行されたことを意味します。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 36:\nデータエンジニアリングチームが、Unity Catalog のガバナンス対象テーブルを読み取る必要がある新しい分析パイプラインを実装しています。Unity Catalog データへのアクセスをサポートするコンピューティングタイプはどれですか？",
        options: [
            "(A) 標準アクセスモードまたは専用アクセスモードで構成されたクラシックコンピューティング",
            "(B) Databricks Runtime 11.3 LTS未満のクラシックコンピューティング",
            "(C) 「分離共有なし (No Isolation Shared)」アクセスモードで構成されたクラシックコンピューティング",
            "(D) Databricks Runtime 10.4 LTS未満を実行するクラシックコンピューティング",
            "(E) SQLウェアハウスコンピューティング"
        ],
        answerIndex: [0, 4],
        explanation: "解答：(A), (E)\n\n解説：Unity Catalogのデータに安全にアクセスするには、SQL Warehouse を使用するか、従来のクラスターを「標準 (Shared)」または「専用 (Single User)」のアクセスモードで構成する必要があります。「分離なし (No Isolation Shared)」モードや、要件を満たさない古いDatabricks RuntimeバージョンではUnity Catalogを利用できません。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 37:\nデプロイ前に Databricks Asset Bundles 構成のエラーをチェックするために使用する Databricks CLI コマンドはどれですか？",
        options: [
            "(A) databricks bundle init",
            "(B) databricks bundle validate",
            "(C) databricks bundle check",
            "(D) databricks bundle verify"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：`databricks bundle validate` コマンドを使用すると、ワークスペースにリソースをデプロイする前に、`databricks.yml` の構成が構文的に正しく、構造的なエラーがないかを事前に検証・チェックできます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 38:\nマーケティング部門のデータサイエンティストは、BIカタログの一部であるアナリティクススキーマ内の「customer_insights」テーブルへの読み取り専用アクセスを必要としています。最小権限の原則に従い、必要なタスクを実行するために必要な最小限の権限のみを付与する必要があります。\nどのSQLコマンドを使えば、最小限の権限で正しくアクセス権限を付与できますか？",
        options: [
            "(A) GRANT SELECT ON TABLE bi.analytics.insights TO marketing_team;",
            "(B) GRANT SELECT ON TABLE bi.analytics.insights TO marketing_team;\nGRANT USE SCHEMA ON SCHEMA bi.analytics TO marketing_team;",
            "(C) GRANT SELECT ON TABLE bi.analytics.insights TO marketing_team;\nGRANT USE CATALOG ON CATALOG bi TO marketing_team;",
            "(D) GRANT SELECT ON TABLE bi.analytics.insights TO marketing_team;\nGRANT USE SCHEMA ON SCHEMA bi.analytics TO marketing_team;\nGRANT USE CATALOG ON CATALOG bi TO marketing_team;"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Unity Catalogの階層的アクセス制御モデルにおいて、テーブルへの `SELECT` 権限を機能させるためには、そのテーブルが属するスキーマに対する `USE SCHEMA` 権限と、親カタログに対する `USE CATALOG` 権限の両方が必ず必要です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 39:\nDelta Lakeテーブルにおいて、トランザクションログファイルの主要なフォーマットは次のうちどれですか？",
        options: [
            "(A) Parquet (パルケ)",
            "(B) JSON",
            "(C) XML",
            "(D) Delta"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Delta Lakeのテーブルは2つの要素で構成されています。実データは「Parquet」フォーマットで保存されますが、データの変更履歴などを記録するトランザクションログ（_delta_logディレクトリ内）は「JSON」フォーマットで保存されます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 40:\nデータエンジニアが、Databricksジョブクラスタに関連する高額なクラウドコストのトラブルシューティングを行っています。クラスタは15ワーカーの固定サイズで構成されていますが、処理のピーク時を除けば、ワークロードに必要なリソースは通常より少なくて済みます。\nコストを削減しつつ、コンピューティングリソースの使用効率を最も最適化できる推奨事項はどれでしょうか？",
        options: [
            "(A) 適切な最小および最大ワーカー制限を設定してオートスケーリングを構成します。",
            "(B) 固定サイズのクラスタ構成を維持しながら、より小さなインスタンスタイプに切り替える。",
            "(C) アイドル時間中に一定期間操作がない場合に自動的に終了するように設定する。",
            "(D) ジョブクラスタを汎用クラスタに置き換えて、クラスタの可用性を向上させる。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：負荷に波があるワークロードの場合、オートスケーリング（最小ワーカー数と最大ワーカー数の設定）を有効にすることで、処理のピーク時にはワーカー数を増やして対応し、負荷の低い時間帯はリソースを最小限に縮小して無駄なコストを抑えることができます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 41:\nデータアナリストは、doctors_dfとappointments_dfという2つのPySparkデータフレームを扱っています。どちらのデータフレームにもdoctor_id列が含まれています。彼らは、予約済みの医師のみを含む新しいデータフレームを作成する必要があり、そのためには両方のデータフレームの列を組み合わせる必要があります。\nこれを実現するPySparkコードはどれですか？",
        options: [
            "(A) joined_df = doctors_df.join(appointments_df, \"doctor_id\", \"left\")",
            "(B) joined_df = doctors_df.join(appointments_df, \"doctor_id\", \"full\")",
            "(C) joined_df = doctors_df.join(appointments_df, \"doctor_id\", \"cross\")",
            "(D) joined_df = doctors_df.join(appointments_df, \"doctor_id\", \"inner\")"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：「予約済みの医師のみ」ということは、doctors_df と appointments_df の「両方に存在する doctor_id だけを残す」必要があります。これを行うための正しい結合方法は内部結合（\"inner\"）です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 42:\nデータエンジニアは、以下のSQL文を持っています。\n\nCREATE POLICY banking_policy ON SCHEMA bank.safebox\nFOR COLUMNS MASK bank.safebox.mask_card\nTO financial_analysts EXCEPT admins\nMATCH COLUMNS hasTagValue('pii', 'credit_card');\n\n次の選択肢のうち、この記述を正しく説明しているのはどれですか？",
        options: [
            "(A) bank.safeboxスキーマ内のすべてのテーブルにおいて、タグ pii=credit_card を持つすべての列に対してmask_card UDF を使用して列マスキングを適用します。financial_analystsグループのユーザーにはマスキングされた値が表示され、adminsグループのユーザーにはマスキングされていない値が表示されます。",
            "(B) bank.safeboxスキーマ内のすべてのテーブルにおいて、piiタグが付いたすべての列に対してmask_card UDF を使用して列マスキングを適用します。financial_analystsグループのユーザーにはマスキングされた値が表示され...",
            "(C) bank.safeboxスキーマ内のすべてのテーブルにおいて、タグ pii=credit_card が付いたすべての列に対してmask_card UDF を使用して列マスキングを適用します。financial_analystsグループのユーザーはマスキングされていない値を表示し、adminsグループのユーザーはマスキングされた値を表示します。",
            "(D) bank.safeboxスキーマ内のすべてのテーブルにおいて、pii=credit_cardタグが付いたすべての列に対して行フィルタリングを適用します。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：このABACポリシーは、指定スキーマ内の `pii=credit_card` タグを持つ列に対して `mask_card` UDFを適用します。`TO financial_analysts EXCEPT admins` という句により、このマスキングポリシーは `financial_analysts` に対して適用され（マスクされて見えなくなる）、例外として `admins` には適用されない（生データが見える）という制御になります。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 43:\nデータエンジニアは、Lakeflow Spark Declarative Pipeline（旧称 Delta Live Tables）で以下の関数を定義します。\n\n@dp.table\n@dp.expect_or_drop(\"recent_transaction\", \"transaction_date >= '2025-01-01'\")\n@dp.expect_or_drop(\"valid_transaction\", \"transaction_id IS NOT NULL\")\ndef silver_sales():\n    return spark.readStream(\"bronze_sales\")\n\nこのパイプラインを実行した結果を正しく説明しているのは、次のうちどれですか？",
        options: [
            "(A) 定義された期待値に違反する行は、silver_sales テーブルにストリーミングされます。",
            "(B) 定義された期待値に違反する行は、bronze_sales テーブルから削除されます。",
            "(C) 定義された期待値に違反する行はフィルタリングされ、有効な行のみが silver_sales に書き込まれます。",
            "(D) 定義された要件に違反する行は、両方のテーブルから削除されます。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：`@expect_or_drop` デコレータは、指定した品質制約（期待値）を満たさない行を自動的にフィルタリングして破棄し、条件を満たした有効なレコードのみをターゲットである `silver_sales` テーブルに書き込みます。ソースである `bronze_sales` 自体のデータが削除・改変されることはありません。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 44:\nデータエンジニアがイベントテーブルをストリーミングソースとしてクエリするために使用できるコードブロックは次のうちどれですか？",
        options: [
            "(A) spark.readStream.table(\"events\")",
            "(B) spark.readStream().table(\"events\")",
            "(C) spark.readStream(\"events\")",
            "(D) spark.read.table(\"events\")"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Deltaテーブルを構造化ストリーミングのソースとしてストリーム読み取りするための正しいPySpark構文は `spark.readStream.table(\"テーブル名\")` です。`read` を使用すると静的なバッチ読み取りになってしまいます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 45:\nデータエンジニアは、Lakeflow Spark Declarative Pipeline（旧称 Delta Live Tables）において、以下のデータ品質制約を定義しました。\n\nCONSTRAINT valid_id EXPECT (id IS NOT NULL) _____________\n\n上記の空欄を埋めて、この制約に違反するレコードが削除され、メトリクスに報告されるようにしてください。",
        options: [
            "(A) ON VIOLATION DROP ROW",
            "(B) ON VIOLATION FAIL UPDATE",
            "(C) ON VIOLATION IGNORE",
            "(D) ON VIOLATION句を追加する必要はありません。デフォルトでレコードは破棄されます。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：DLTにおいて、期待値に違反するレコードをテーブルに書き込まずに破棄（ドロップ）する動作を指定する句は `ON VIOLATION DROP ROW` です。何も指定しない場合は、デフォルトで違反レコードもそのまま保持（書き込み）され、警告だけがメトリクスに記録されます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 46:\nデータエンジニアがGitフォルダのローカル変更をリモートリポジトリに保存するために使用できる操作は次のうちどれですか？",
        options: [
            "(A) マージとプル",
            "(B) コミット＆プル",
            "(C) コミットしてプッシュする (Commit & Push)",
            "(D) マージ＆プッシュ"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：DatabricksのGitフォルダーでコードの変更を行った後、その変更履歴をローカルに保存し（コミット）、それをGitHubなどのリモートリポジトリにアップロードして反映させるための操作は「コミット＆プッシュ (Commit & Push)」です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 47:\n以下の2つの表が与えられた場合：\n\nstudents\n|student_id|name |age|\n|U0001     |Adam |23 |\n|U0002     |Sarah|19 |\n|U0003     |John |36 |\n\nenrollments\n|course_id|student_id|\n|C0055         |U0001          |\n|C0066         |U0001          |\n|C0077         |U0002          |\n\n以下のクエリが「コースに登録していない学生(John)を含めすべての学生を表示し、登録がない場合はNULLを表示する」結果を返すように、空欄を埋めてください。\n\nSELECT students.name, students.age, enrollments.course_id\nFROM students\n_____________ enrollments\nON students.student_id = enrollments.student_id\n\n|name |age|course_id|\n|Adam |23 |C0055    |\n|Adam |23 |C0066    |\n|Sarah|19 |C0077    |\n|John |36 |NULL     |" , 
        options: [
            "(A) ANTI JOIN",
            "(B) LEFT JOIN",
            "(C) INNER JOIN",
            "(D) RIGHT JOIN"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：左側のテーブル（students）のすべての行を維持し、右側のテーブル（enrollments）に一致するデータがあれば結合し、なければNULLを返す結合方法は `LEFT JOIN`（または `LEFT OUTER JOIN`）です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 48:\nデータエンジニアがDatabricksアセットバンドル (DABs) を使用してジョブを構成しており、そのアクセスを承認されたユーザーのみに制限したいと考えています。以下のジョブ定義にはタスクとジョブクラスタが含まれていますが、エンジニアはジョブを管理または表示できるユーザーグループも定義する必要があります。\n\nresources:\n  jobs:\n    my-job:\n      tasks: [...]\n      __________:\n        - group_name: devops-team\n          level: CAN_MANAGE\n\n指定された要件を満たすために、空欄に正しく記入できる選択肢はどれですか？",
        options: [
            "(A) permissions (権限)",
            "(B) roles (役割)",
            "(C) access_controls",
            "(D) job_settings"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Databricks Asset BundlesのYAML定義において、ジョブやリソースに対するアクセス制御（ACL / CAN_MANAGE や CAN_VIEW など）を構成するためのキーは `permissions` です。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 49:\nLakeflow Connectにおいて、管理対象の取り込みコネクタ (Managed Connectors) のセットに含まれないオプションは次のうちどれですか？",
        options: [
            "(A) Auto Loader (自動ローダー)",
            "(B) Salesforce",
            "(C) PostgreSQLデータベース",
            "(D) Workday"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Databricks Lakeflow Connectにおける「管理対象コネクタ（マネージドコネクタ）」は、Salesforce、Workday、PostgreSQLなどのSaaSやデータベースに対するノーコードの接続を指します。クラウドストレージからのファイル取り込みを行う Auto Loader は、コードの記述が必要な標準コネクタに分類されます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 50:\nデータプラットフォームチームが、宣言型自動化バンドル (DABs) を本番環境のワークスペースにデプロイしようとしています。彼らは、バンドル内で定義されている既存のジョブやパイプラインが現在実行中の場合、アクティブなワークロードが上書きされて破損するのを防ぐため、デプロイを自動的に中止するようにしたいと考えています。\nこの要件を満たすために、チームはどのデプロイコマンドを使用すべきでしょうか？",
        options: [
            "(A) databricks bundle deploy -t prod --force",
            "(B) databricks bundle deploy -t prod --check-executions",
            "(C) databricks bundle deploy -t prod --fail-on-active-runs",
            "(D) databricks bundle deploy -t prod --stop-if-running"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：本番環境へのデプロイ時に、対象のジョブやパイプラインが現在アクティブに実行中であるかどうかをチェックし、実行中であればデプロイを失敗させてブロックするコマンドフラグは `--fail-on-active-runs` です。これにより、実行中のワークロードの破損を防ぐことができます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 51:\nデータエンジニアは、複数のノートブックタスクを含むLakeflowジョブを設計し、ブロンズからシルバーへのパイプラインを構築します。ブロンズノートブックタスクは、取り込み監査テーブルからlatest_batch_numberを計算します。シルバーノートブックタスクは、同じジョブ実行中にその値を使用する必要があります。\n彼らは、中間結果を外部ストレージに書き込むことなく、計算された値をタスク間で受け渡したいと考えている。これらの要件を最もよく満たす構成方法はどれですか？",
        options: [
            "(A) Bronzeノートブックの一時ビューに latest_batch_number を書き込み、Silverノートブックからそのビューをクエリします。",
            "(B) Bronzeノートブックでは `dbutils.jobs.taskValues.set(\"latest_batch_number\", value)` を呼び出し、Silverタスク構成では `{{tasks.BronzeTask.values.latest_batch_number}}` を使用して参照する。",
            "(C) latest_batch_number をクラスタ環境変数に保存し、Silverノートブックで `spark.conf.get` を使用して取得します。",
            "(D) ノートブックウィジェットを通して渡し、ノートブックの実行を手動でチェーンします。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Databricks Jobsの同一実行内で、タスク間で小さな値（バッチ番号や状態など）を動的に受け渡すための標準機能は「タスク値 (Task Values)」です。送信側が `dbutils.jobs.taskValues.set` を使い、受信側が動的パラメータ参照構文を使うことで、ストレージを介さずにシームレスに値を受け渡すことができます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 52:\nDatabricksにおける分析ワークロードに対する Liquid Clustering (リキッドクラスタリング) の主な利点は何ですか？",
        options: [
            "(A) データ重複を防ぎ、クエリパフォーマンスを向上させます。",
            "(B) クエリ実行時のスキャンデータ量を削減します。",
            "(C) 取り込み時に機密データフィールドを自動的に暗号化します。",
            "(D) 入力データソースからのリアルタイムストリーミングを保証します。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Liquid Clusteringは、指定されたクラスタリングキーに基づいて関連するデータを物理的にグループ化して保存する動的なデータレイアウト技術です。これにより、特定のキーでフィルタリング（WHERE句）するクエリを実行した際に、不要なデータファイルの読み込みをスキップ（データスキッピング）できるようになり、スキャンするデータ量が大幅に削減されてパフォーマンスが向上します。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 53:\nデータエンジニアはSpark UI上で、ステージ内のほとんどのパーティションには約100MBのデータが含まれているが、一部のパーティションには数ギガバイトのデータが含まれていることを確認した。これらの大きなパーティションを処理するタスクは、完了までに著しく時間がかかる。\n主なパフォーマンス上のボトルネックは何ですか？",
        options: [
            "(A) エグゼキュータのメモリリーク",
            "(B) 小さなファイルの問題 (Small File Problem)",
            "(C) ネットワークタイムアウト",
            "(D) データ偏り (Data Skew)"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：パーティション間でデータ量に極端な不均衡が生じている状態を「データスキュー（データの偏り）」と呼びます。一部のパーティションが巨大化していると、そのパーティションを処理するタスクだけがボトルネックとなり、ジョブ全体の完了時間を大幅に遅延させます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 54:\nDeltaテーブルを削除 (DROP TABLE) する際に、テーブルのメタデータとデータファイルの両方が完全に削除される理由として、次のうちどれが適切ですか？",
        options: [
            "(A) テーブルは浅いクローン (Shallow Clone) です",
            "(B) テーブルは管理対象テーブル (Managed Table) です",
            "(C) データファイルは、デフォルトの保存期間よりも古いものです",
            "(D) テーブルは外部テーブル (External Table) です"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Unity CatalogやHiveメタストアにおいて、Databricksがデータの保存場所を完全に管理する「管理対象テーブル (Managed Table)」を削除した場合は、メタデータ定義だけでなくクラウドストレージ上の物理データファイルも同時に削除されます。外部テーブルの場合はメタデータのみが削除されます。"
    },
    {
        course: "exam2",
        category: "模擬試験",
        question: "問題 55:\nデータエンジニアは、トランザクションデータをSilverテーブルにロードする前に、データのクリーニングを行っています。データ品質を向上させるために、エンジニアは次のPySparkコマンドを使用します。\n\ndf.dropna(subset=['order_id', 'payment_method'])\n\nこのコマンドは何のために使われますか？",
        options: [
            "(A) データフレーム「df」から両方の列を完全に削除します。",
            "(B) 両方の列にヌル値が含まれている行のみを削除します。",
            "(C) order_id または payment_method のいずれかに null 値が含まれている行を削除します。",
            "(D) order_id と payment_method の null 値を空の文字列に置き換えます。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：`dropna(subset=[...])` は、指定した列リストの中にNULL値が含まれている「行」を削除するコマンドです。デフォルトの評価モードは `how='any'` であるため、指定したいずれかの列（order_id または payment_method）にNULLが1つでもあれば、その行全体が削除されます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 1:\nデータエンジニアがDatabricks SQLパイプラインで受信トランザクションデータを検証しています。一部のレコードの数値フィールドに予期しない記号が含まれています。エンジニアは次のクエリを実行します。\n\nSELECT INT(\"100$\")\n\nこのクエリの結果を最も適切に表しているのは、次のうちどれですか？",
        options: [
            "(A) NULL",
            "(B) 100",
            "(C) エラーが発生しました",
            "(D) 100ドル"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：デフォルトでは、INT (CAST関数と同等) 対象の数値型に含まれない文字 (「100$」の末尾の $ 記号など) を含む文字列に対して関数を使用すると、クエリはすぐに失敗し、実行時例外[CAST_INVALID_INPUT]がスローされます。エラーを回避してNULLを返したい場合は TRY_CAST() を使用します。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 2:\n「ワークスペースとクラウド全体にわたるメタデータとアクセス制御を管理する、集中型のガバナンスレイヤーです。3階層の名前空間（カタログ、スキーマ、テーブル）を使用してデータを整理し、列レベルまでのきめ細かな権限設定を可能にするとともに、コンプライアンスのための監査ログとデータリネージも提供します。」\n上記の記述で説明されているのは、次のうちどれですか？",
        options: [
            "(A) Databricks SQL",
            "(B) Unity Catalog (Unityカタログ)",
            "(C) Delta Lake (デルタレイク)",
            "(D) Hive Metastore (Hiveメタストア)"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：この説明はDatabricks Unity Catalogの正確なアーキテクチャ定義とコア機能セットについて説明しています。複数のワークスペースをまたいだ集中型ガバナンス、3階層の名前空間、列/行レベルのセキュリティ、データリネージの自動追跡などを提供します。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 3:\nデータエンジニアは、毎晩午前2時に売上データを集計するLakeflowジョブを実行する必要があります。このジョブはリアルタイム処理を必要とせず、毎日決まった時間にのみ実行される必要があります。\nデータエンジニアはこの作業にどのようなトリガー構成を使用すべきでしょうか？",
        options: [
            "(A) テーブル更新トリガー",
            "(B) スケジュールされたトリガー (Scheduled Trigger)",
            "(C) 連続トリガー",
            "(D) ファイル到着トリガー"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：ジョブを「毎晩午前2時」などのあらかじめ決められた固定間隔または時刻に実行する必要がある場合は、cron式等を使用して実行を制御する「スケジュールされたトリガー」を使用します。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 4:\n財務分析チームは、Unity Catalog の Delta Lake テーブル「transactions」を管理しており、そのテーブルには id, amount, region, account_manager という列があります。彼らはこのテーブルに行フィルタリングを適用して、以下のことを実現したいと考えています。\n\n・財務チームのメンバーはすべての取引を見ることができますが、他のユーザーは「米国(US)」地域の記録のみを閲覧できます。\n\n以下のユーザー定義関数のうち、これを実現するのに役立つものはどれですか？",
        options: [
            "(A) CREATE FUNCTION us_filter(region STRING)\n   RETURN CASE WHEN IS_ACCOUNT_GROUP_MEMBER('finance_team') THEN true ELSE region END",
            "(B) CREATE FUNCTION us_filter(region STRING)\n   RETURN IF(IS_ACCOUNT_GROUP_MEMBER('finance_team'), region='US', true);",
            "(C) CREATE FUNCTION us_filter(region STRING)\n   RETURN CASE WHEN IS_ACCOUNT_GROUP_MEMBER( 'finance_team' ) THEN region='US' ELSE true END",
            "(D) CREATE FUNCTION us_filter(region STRING)\n   RETURN IF(IS_ACCOUNT_GROUP_MEMBER('finance_team'), true, region='US');"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：行レベルフィルタでは、関数が「true」を返した行のみがユーザーに表示されます。IS_ACCOUNT_GROUP_MEMBER('finance_team') を使用してユーザーが所属しているか確認し、属していれば `true` (全件表示) を返し、属していなければ `region='US'` が一致するかどうかの結果（米国の取引のみ true）を返すロジックが正解です。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 5:\n顧客データを完全に保存しているのは、次のうちどの場所ですか？",
        options: [
            "(A) コントロールプレーン (Control Plane)",
            "(B) Databricksアカウント",
            "(C) 顧客のクラウドアカウント (データプレーン)",
            "(D) Databricksが管理するクラスター"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Databricks Lakehouseのアーキテクチャでは、実際のデータファイル（Parquetファイル等）を保存するストレージアカウント（S3, ADLS, GCSなど）はすべて「顧客のクラウドアカウント（データプレーン）」内に存在し、コントロールプレーン側には保存されません。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 6:\nあるデータエンジニアが、完了までに2時間以上かかる複数のタスクを含むジョブを担当している。前回の実行時、最後のタスクが予期せず失敗した。\nデータエンジニアは、実行時間を最小限に抑えながらこのジョブ実行を完了するために、次のうちどの操作を実行できますか？",
        options: [
            "(A) 失敗した実行記録はそのままにしておき、単にその仕事のために新しい実行を開始すればよい。",
            "(B) ジョブ実行を修復(Repair)し、失敗したタスクとその下流のみを再実行させることができます。",
            "(C) 失敗した実行を削除し、ジョブの新しい実行を開始する必要があります。",
            "(D) エラーが発生した場合に自動的に実行を再試行する本番モードでジョブを実行できます。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Databricks Jobsの「Repair and Run（修復して実行）」機能を使用すると、成功済みのタスクをスキップして、失敗したタスクおよびその下流のタスクのみを再実行できます。これにより、ジョブ全体の復旧時間を大幅に短縮できます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 7:\nデータエンジニアリングチームは、Apache KafkaトピックからDatabricksにクリックストリームイベントを取り込む必要があります。システムは毎秒10,000件のイベントを受信し、データは60秒未満の遅延で処理されなければなりません。\nどのデータ取り込み方法が最も適切でしょうか？",
        options: [
            "(A) KafkaからDatabricksへの Spark Structured Streaming (構造化ストリーミング)",
            "(B) Lakeflowマネージドコネクタを使用したKafkaの増分データ取り込み",
            "(C) Kafkaから24時間ごとにテーブル全体を再読み込みします。",
            "(D) 1分ごとにスケジュールされたSparkジョブを使用してバッチ取り込みを実行します。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：60秒未満の低遅延かつ高スループット（毎秒10,000イベント）でKafkaからストリーム処理を行うには、Kafka用のネイティブコネクタを備えた Spark Structured Streaming を使用するのが最適です。1分ごとのバッチスケジュールでは起動オーバーヘッドが重なり、レイテンシ要求を満たせなくなります。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 8:\n本番環境のジョブには、以下のどのクラスタタイプを使用することをお勧めしますか？",
        options: [
            "(A) プールクラスター",
            "(B) オンプレミスクラスター",
            "(C) ジョブクラスター (Job Compute)",
            "(D) 汎用クラスター (All-Purpose Compute)"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：自動化された本番ジョブの実行には「ジョブクラスター（Job Compute）」を使用することがベストプラクティスです。ジョブの開始時に専用のクリーンなクラスターが起動し、終了時に自動で破棄されるため、他のジョブとの干渉がなくなり、コスト（DBU単価）も汎用クラスターより安価になります。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 9:\nデータアナリストは、teachers_df と courses_df という2つのPySparkデータフレーム（どちらにも teacher_id 列が含まれる）を扱っています。彼らは、「どのコースも担当していない教師」のデータフレームを必要としています。\nこの要件を満たすPySparkコードはどれですか？",
        options: [
            "(A) joined_df = teachers_df.join(courses_df, \"teacher_id\", \"left_semi\")",
            "(B) joined_df = teachers_df.join(courses_df, \"teacher_id\", \"left\")",
            "(C) joined_df = teachers_df.join(courses_df, \"teacher_id\", \"left_anti\")",
            "(D) joined_df = teachers_df.join(courses_df, \"teacher_id\", \"full\")"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：左側のデータフレーム（teachers_df）に存在し、右側のデータフレーム（courses_df）には「存在しない（一致しない）」レコードだけを抽出したい場合は、アンチジョインである `left_anti` を使用します。これにより、コーステーブルに登録がない教師のみが残ります。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 10:\nデータエンジニアは、入力データファイルを増分的にロードするために、Auto Loader を使用するか、COPY INTO コマンドを使用するかを判断する必要があります。\nデータエンジニアは、以下のどのシナリオで COPY INTO コマンドよりも Auto Loader を使用すべきでしょうか？",
        options: [
            "(A) 数千個程度の少数のファイルを取り込む場合",
            "(B) 今後、数百万個以上のファイルを取り込む予定である場合",
            "(C) 再アップロードされたファイルのサブセットを読み込む場合",
            "(D) データスキーマが頻繁に変更されない場合"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：数千個程度の小規模なファイルロードには COPY INTO が手軽で有効ですが、ファイル数が非常に多く数百万を超えるような大規模な増分ロード、または将来的にそれにスケールするシステムを構築する場合は、ファイルの追跡がスケーラブルな Auto Loader（cloudFiles）を使用することが推奨されます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 11:\nデータエンジニアは、Databricksプラットフォームのどの部分を使用して、プリンシパル（ユーザー等）に対してセキュリティ保護可能なオブジェクトへのアクセス許可を付与および取り消すことができますか？",
        options: [
            "(A) Catalog Explorer (カタログエクスプローラー)",
            "(B) Data Studio",
            "(C) アカウントコンソール",
            "(D) ワークスペース管理コンソール"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：データオブジェクト（カタログ、スキーマ、テーブルなど）のアクセス許可（GRANT/REVOKE）や所有権の管理は、「Catalog Explorer（カタログエクスプローラー）」を通じて視覚的およびシステム的に管理されます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 12:\n以下のタスクのうち、Databricks Gitフォルダ (Repos) ではサポートされておらず、Gitプロバイダ (GitHub等) 側で実行する必要があるものはどれですか？",
        options: [
            "(A) ブランチを削除する",
            "(B) 開発作業用のブランチを作成し、チェックアウトする",
            "(C) コミット時に差異 (Diff) を視覚的に比較する",
            "(D) リモートのGitリポジトリをクローン、プッシュ、またはプルする"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：DatabricksのGitフォルダ内で、コミット、プッシュ、プル、新しいブランチの作成や切り替え（チェックアウト）、Diffの比較は可能ですが、「ブランチの削除」や「プルリクエスト(PR)の作成」といった操作はサポートされておらず、GitHub等のプロバイダUIで行う必要があります。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 13:\nデータエンジニアは、以下のスキーマを持つ「products」テーブルを扱っています。\n\nproduct_id STRING,\nupdated_at TIMESTAMP,\ndetails STRUCT<name: STRING, category: STRING, pricing: STRUCT<base_price: DOUBLE, discount: DOUBLE>>\n\n彼らは、details内のすべてのフィールドをフラット化して、name, category, およびネストされた価格フィールドをルートレベルの列にしたいと考えています。この目的を正しく達成するSQLクエリはどれですか？",
        options: [
            "(A) SELECT product_id, updated_at, EXPLODE(details) FROM products;",
            "(B) SELECT * FROM products;",
            "(C) SELECT product_id, updated_at, details.name, details.category, details.pricing.base_price, details.pricing.discount FROM products;",
            "(D) SELECT product_id, updated_at, details.* FROM products;"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Databricks SQLでSTRUCT（構造体）の中身をフラット化して展開するには、ドット表記（`.`）を使用して各フィールドを明示的に抽出する必要があります。`details.*` とすると1階層目は展開されますが、その下の `pricing` STRUCTがネストされたまま残ってしまうため、最深部まで明示的に指定している(C)が正解です。EXPLODEはArrayやMapを展開するための関数であり、STRUCTには使用できません。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 14:\nデータエンジニアは、mask_credit_card(cc STRING) UDFを使用して列マスキングを一元的に適用するために、次のUnity Catalog ABACポリシーを定義します。\n\nCREATE POLICY banking_policy ON SCHEMA bank.safebox\nCOLUMN MASK bank.safebox.mask_credit_card\nTO financial_analysts EXCEPT admins\nFOR TABLES\n__________________________\nON COLUMN cc;\n\nbank.safeboxスキーマ内のすべてのテーブルにおいて、pii=credit_card というタグが付いたすべての列をマスクする必要があります。\n指定された要件を満たすために、空欄に正しく記入できる選択肢はどれですか？",
        options: [
            "(A) MATCH COLUMNS hasTag('pii') AS credit_card",
            "(B) MATCH COLUMNS hasTagValue('pii') AS credit_card",
            "(C) MATCH COLUMNS hasTagValue('pii', 'cc') AS credit_card",
            "(D) MATCH COLUMNS hasTagValue('pii', 'credit_card') AS cc"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Unity Catalogの属性ベースアクセス制御（ABAC）ポリシーで、タグの「キー」と「値」の両方が一致する列を識別するには `hasTagValue('タグキー', 'タグ値')` を使用します。また、最後の句が `ON COLUMN cc` となっているため、AS で付与するエイリアスも `cc` に一致させる必要があります。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 15:\nデータエンジニアがSpark UIを介してSparkジョブを分析しています。特定のステージで完了した27個のタスクについて、以下の要約メトリクスを取得しました。\nDuration: [25th=2s, Median=2s, 75th=3s, Max=30s]\nInput Size: [25th=179KiB, Median=183.9KiB, 75th=186.7KiB, Max=803KiB]\nShuffle Write Size: [25th=6.1KiB, Median=6.9KiB, 75th=8.1KiB, Max=300.8KiB]\n\nデータエンジニアは上記の統計データからどのような結論を導き出すことができるでしょうか？",
        options: [
            "(A) 空きパーティションまたはほぼ空きパーティション上で動作しているタスクの数が多い。",
            "(B) すべてのタスクは、偏りの大きい大量のデータを含むパーティション上で動作しています。",
            "(C) すべてのタスクは、均等な量のデータを含むパーティション上で動作します。",
            "(D) 多数のタスクのうち、一部のタスクが偏りの大きいデータ量を含むパーティション上で動作している。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：25%〜75%パーセンタイルのタスク実行時間は2〜3秒で安定していますが、Max（最大）タスクだけが30秒かかり、入力サイズとシャッフル書き込みサイズも突出して高くなっています。これは一部のキーにデータが極端に偏っている「データスキュー」が発生しており、少数のタスクだけが遅延していることを明確に示しています。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 16:\nDatabricksのスポットインスタンス (Spot Instances) を使用するのに最適なシナリオはどれですか？",
        options: [
            "(A) 厳格なSLA要件を満たすリアルタイムストリーム処理",
            "(B) 再試行機能を備えた重要度の低いバッチ処理ジョブ",
            "(C) 高い同時実行性を要求するトランザクションワークロード",
            "(D) ビジネスアナリストによるインタラクティブなデータ分析"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：クラウドプロバイダーの余剰キャパシティを安価に利用できる「スポットインスタンス」は、プロバイダーの都合で突然強制終了（回収）されるリスクがあります。そのため、中断されても安全に再試行でき、時間の柔軟性がある「重要度の低い（またはフォールトトレラントな）バッチ処理ジョブ」に最適です。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 17:\nDelta Lakeのテーブルにおいて、データファイルの主要なフォーマットは次のうちどれですか？",
        options: [
            "(A) Delta",
            "(B) JSON",
            "(C) Parquet と JSON の両方",
            "(D) Parquet (パルケ)"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Delta Lakeのテーブルは、「Parquet」形式で保存された実データファイルと、データの変更履歴などを記録するJSON形式の「トランザクションログ」で構成されています。実データファイルの主要フォーマットはParquetです。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 18:\nデータエンジニアが、Deltaテーブルのディレクトリ内に未使用のデータファイルが存在することに気づきました。そこで VACUUM コマンドを実行しましたが、未使用のデータファイルの一部しか削除されませんでした。\nVACUUMコマンドを実行した後、未使用のデータファイルの一部しか削除されなかった理由として考えられるのは、次のうちどれですか？",
        options: [
            "(A) 残りのファイルはデフォルトの保存期間のしきい値よりも新しいため、削除されませんでした。",
            "(B) 残りのファイルはデフォルトのサイズしきい値よりも小さいため、削除されませんでした。",
            "(C) 残りのファイルはデフォルトの保持期間のしきい値よりも古いため、削除されませんでした。",
            "(D) 残りのフアイルはデフォルトのサイズしきい値よりも大きいため、削除されませんでした。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：VACUUMコマンドは、現在テーブルから参照されておらず、かつ「データ保持期間（デフォルトで7日間）」よりも古いデータファイルのみを削除します。保持期間より新しく生成されたばかりの未使用ファイルは、並行して実行中の別のクエリがまだ読み取っている可能性があるため、安全のために削除されず保持されます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 19:\nデータエンジニアリングチームは、以下の宣言型自動化バンドル（DAB）構成を使用しています。\n\nbundle: name: demo_bundle\nvariables: catalog_name: default: demo_catalog\n\nチームは、ビジネスコードを変更することなく環境固有の動作を可能にするために、ターゲットごとに catalog_name 変数を設定したいと考えています。どの構成がこの要件を満たしますか？",
        options: [
            "(A) targets:\n      dev:\n        variables:\n          catalog_name: dev_catalog",
            "(B) variables:\n      catalog_name:\n        default: demo_catalog\n        targets:\n            dev: dev_catalog",
            "(C) variables:\n      catalog_name:\n        target: ${target}_catalog",
            "(D) variables:\n      catalog_name:\n        dev: dev_catalog"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Databricks Asset Bundlesにおいて、デプロイ先（devやprod）の環境ごとに変数の値を上書き設定する場合は、トップレベルに定義された `targets` ブロックの中で対象のターゲット名を指定し、その下に `variables` マッピングをネストして記述する必要があります。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 20:\nデータエンジニアは、以下のLakeflowジョブを管理します。\n          |---> Task 2\nTask 1 ---|---> Task 3\n          |---> Task 4\n彼らは、並行して実行されているすべてのタスク（タスク2、3、4）が完了した後に実行される新しいタスク、Task 5を追加したいと考えています。どのタスク構成がこの要件を満たしますか？",
        options: [
            "(A) タスク5をファンイン (fan-in) 制御フローを使用して、3つの並列タスクすべてに依存するように設定する。",
            "(B) タスク5は、タスク2とタスク3の後に順番に実行されるタスク4のみに依存するように設定します。",
            "(C) タスク5を別のジョブとして設定し、現在のジョブが完了した後に実行されるようにスケジュールする。",
            "(D) 依存関係なしでタスク5を追加し、条件として run_if: ALL_DONE を指定する。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：複数の並列タスク（Task 2, 3, 4）がすべて終わった後で次のタスク（Task 5）を実行する設計パターンを「ファンイン (fan-in)」と呼びます。Task 5の「依存先 (Depends on)」プロパティに、対象となる3つのタスクすべてを明示的に指定することで実現できます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 21:\nデータエンジニアが、日々の機密データを処理するために、ノートブックをDatabricksジョブとしてスケジュール設定しました。彼らは、ジョブがトリガーされたときにノートブックのコードが実際にどこで実行されるのかを懸念しています。\nこのジョブの実行場所を説明しているのは、次のうちどれですか？",
        options: [
            "(A) Sparkを実行しているクラスターの計算プレーン (Compute Plane) において",
            "(B) ノートブックが格納されているコントロールプレーン (Control Plane) 内",
            "(C) Unity Catalogでのクエリプランニング中",
            "(D) ワークスペースストレージバケット内"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Databricksのアーキテクチャでは、ノートブックのメタデータはコントロールプレーンに保存されますが、実際のデータ処理やコードの実行（Sparkの分散処理）は、顧客のアカウント内にデプロイされたクラスターが稼働する「計算プレーン（データプレーン）」内で完全に処理されます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 22:\nデータエンジニアが、非常に大きなPySparkデータフレームと小さなデータフレームを以下のように結合しています。\n`largeDF.join(smallerDF, [\"key\"], \"inner\")`\nこの結合処理はデータシャッフルが発生するため、処理速度が遅くなります。そこで、より小さなデータフレームをクラスタ内のすべての実行ノードに送信できるようにすることで、処理速度を最適化したいと考えています。\n以下の関数のうち、データフレームがすべての実行エンジンのメモリに収まるほど小さいとマークするために使用できるものはどれですか？",
        options: [
            "(A) pyspark.sql.functions.distribute",
            "(B) pyspark.sql.functions.shuffle",
            "(C) pyspark.sql.functions.explode",
            "(D) pyspark.sql.functions.broadcast"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：`pyspark.sql.functions.broadcast` 関数を使用すると、指定した小さなDataFrameがクラスター内のすべてのワーカーノードにブロードキャスト（コピー）され、ネットワークを介した高コストなシャッフル処理を伴うことなく「ブロードキャストハッシュ結合」が強制的に実行されます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 23:\nデータエンジニアは、宣言型自動化バンドル (DABs) を使用して、ローカルマシンからPATトークンを介して開発ワークスペースにジョブをデプロイしたいと考えています。\nデータエンジニアは、Databricks Unified Authenticationを設定するために、シェル環境でどの2つの環境変数を設定する必要がありますか？（2つ選択してください）",
        options: [
            "(A) DATABRICKS_CLIENT_ID",
            "(B) DATABRICKS_CLIENT_SECRET",
            "(C) DATABRICKS_WORKSPACE",
            "(D) DATABRICKS_TOKEN",
            "(E) DATABRICKS_HOST"
        ],
        answerIndex: [3, 4],
        explanation: "解答：(D), (E)\n\n解説：ローカル環境からパーソナルアクセストークン（PAT）を用いてDatabricks CLIやバンドルを認証する場合、ワークスペースのURLを指定する `DATABRICKS_HOST` と、認証トークン自体を保持する `DATABRICKS_TOKEN` の2つの環境変数を設定する必要があります。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 24:\nデータエンジニアは、次のSQLクエリを使用します。\nGRANT USE SCHEMA ON SCHEMA sales_db TO finance_team\n\nUSE SCHEMA 権限の利点は次のうちどれですか？",
        options: [
            "(A) スキーマ(データベース)全体に対する完全なアクセス権限を付与します。",
            "(B) スキーマへの読み取りアクセス権を付与します。",
            "(C) データベースオブジェクトとそのメタデータを表示する機能を提供します。",
            "(D) これはデータベース上で何らかの操作を行うための前提条件です。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Unity Catalogにおいて、`USE SCHEMA` 権限自体はデータの読み書きを許可するものではありませんが、そのスキーマ内のテーブルやビューにアクセスし、何らかの操作を実行するための「通行証（トラバーサル権限・前提条件）」として機能します。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 25:\nある金融サービス会社は、オンプレミスのSQL Serverデータベースから、毎晩のアカウントデータを管理された分析プラットフォームに移行したいと考えています。取り込まれたレコードは、管理されたUnity Catalogテーブルに保存され、アナリストがSQLダッシュボードを使用してデータを即座にクエリできるようにするとともに、コンプライアンス監査のための自動的なデータリネージ追跡を維持する必要があります。\nこれらの要件を最も満たす実装はどれですか？",
        options: [
            "(A) CSVファイルをオブジェクトストレージにエクスポートし、後で別のETLパイプラインでロードする。",
            "(B) Spark JDBCを使用してデータを読み込み、Unity Catalog管理テーブルに直接書き込みます。",
            "(C) テーブルを手動で登録する前に、ODBC経由でデータを一時ファイルに抽出します。",
            "(D) Pandasを使用したローカルPythonスクリプトを使用して、ParquetファイルをUnityカタログボリュームにアップロードします。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：オンプレミスのデータベースからデータを読み込み、即時クエリと自動データリネージの両方を実現するには、PySparkのJDBCフォーマットを使用してデータをメモリに読み込み、そのままUnity Catalogの管理対象テーブルに書き込む（`saveAsTable`）アプローチが最も確実で運用上の摩擦が少ない方法です。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 26:\nジュニアデータエンジニアは通常、INSERT INTOコマンドを使用してデルタテーブルにデータを書き込む。シニアデータエンジニアは、重複レコードの書き込みを回避する別のコマンドを使用することを提案した。\n以下のコマンドのうち、上級データエンジニアが提案したのはどれですか？",
        options: [
            "(A) MERGE INTO",
            "(B) COPY INTO",
            "(C) UPDATE",
            "(D) INSERT OR OVERWRITE"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Delta Lakeの `MERGE INTO` コマンドを使用すると、ターゲットテーブルとソースデータを照合し、「すでに存在する場合は更新 (Update)し、存在しない場合は挿入 (Insert)する」というアップサート処理が可能になります。これにより重複レコードの挿入を安全に回避できます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 27:\nデータエンジニアは、Lakeflow Spark Declarative Pipeline（旧称 Delta Live Tables）において、以下のデータ品質制約を定義しました。\n\nCONSTRAINT valid_id EXPECT (id IS NOT NULL) _____________\n\n上記の空欄を埋めて、この制約に違反するレコードが発生するとパイプラインが「失敗 (Fail)」するようにしてください。",
        options: [
            "(A) ON VIOLATION FAIL UPDATE",
            "(B) ON VIOLATION DROP ROW",
            "(C) ON VIOLATION FAIL",
            "(D) ON VIOLATION FAIL PIPELINE"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：DLTパイプラインにおいて、1つでも品質制約を満たさない無効なレコードが検出された場合に、パイプラインの更新全体を意図的に失敗させて停止させる動作を指定する句は `ON VIOLATION FAIL UPDATE` です。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 28:\nデータエンジニアが employeesDf というDataFrameを持っており、その中に salary という名前の列があります。この列の名前を、employeesDf に対する今後のすべての操作で base_salary に恒久的に変更したいと考えています。\nこの要件を満たすPySparkコード断片はどれですか？",
        options: [
            "(A) employeesDf = employeesDf.select(col(\"*\"), col(\"salary\").alias(\"base_salary\"))",
            "(B) employeesDf = employeesDf.withColumn(\"salary\", \"base_salary\")",
            "(C) employeesDf = employeesDf.select(col(\"salary\").alias(\"base_salary\"))",
            "(D) employeesDf = employeesDf.withColumnRenamed(\"salary\", \"base_salary\")"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：PySparkで既存の列名を変更しつつ、他の列スキーマをそのまま維持するには `withColumnRenamed(既存名, 新規名)` を使用します。また、SparkのDataFrameは不変（Immutable）であるため、変更結果を元の変数名 `employeesDf` に再代入することで後続の処理に反映させます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 29:\nデータエンジニアリングチームは、予測最適化 (Predictive Optimization) が有効になっているUnity Catalogテーブルを管理しています。彼らは、予測最適化の自動メンテナンスの一環として、これらのテーブルに対してどの操作が自動的に実行されるのかを把握していません。\n有効なテーブルに対して、予測最適化が「自動的に処理しない」操作は次のうちどれですか？",
        options: [
            "(A) ANALYZE",
            "(B) OPTIMIZE",
            "(C) ZORDER",
            "(D) VACUUM"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Databricksの予測最適化機能は、テーブルの統計情報の収集(ANALYZE)、ファイルの圧縮最適化(OPTIMIZE)、古いファイルの削除(VACUUM)をインテリジェントに自動実行します。しかし、特定の列に基づくソートである ZORDER（Zオーダー）の適用は自動的には行われません。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 30:\nジュニアデータエンジニアが、Lakeflow Spark Declarative Pipeline (SDP) にデータ品質検証機能を実装する任務を負いました。\nLakeflow 宣言型パイプラインにおいて、以下の関数呼び出しのうち、有効な期待値 (Expectation) 関数ではないものはどれですか？",
        options: [
            "(A) expect_or_drop( ... )",
            "(B) expect_or_warn( ... )",
            "(C) expect_or_fail( ... )",
            "(D) expect( ... )"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：DLT（宣言型パイプライン）でサポートされているデータ品質制約の関数は `@expect` (警告のみ)、`@expect_or_drop` (違反行の破棄)、`@expect_or_fail` (違反でパイプライン停止) の3つです。`expect_or_warn` という名称の関数は存在しません。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 31:\n経験の浅いデータエンジニアが、15個のノートブックタスクを含むDatabricksジョブを作成します。各タスクは、15個の異なるテーブルに対して同じデータ検証ロジックを実行します。各タスクは前のタスクの完了に依存しているため、ワークフローが長くなり、保守が困難になります。\nこのユースケースにおいて、より効率的で拡張性の高いソリューションは何でしょうか？",
        options: [
            "(A) 1つのジョブに複数のタスクをまとめるのではなく、15個のジョブを別々にスケジュールする。",
            "(B) すべてのテーブル検証を1つの大きなノートブックにまとめ、すべてのテーブルを順番にループ処理する。",
            "(C) 15個のノートブックタスクを並列実行するように構成し、それぞれに個別のクラスタ構成を設定する。",
            "(D) For eachタスクを使用して、テーブル名をパラメータとして渡しながら、各テーブルに対して同じ検証ノートブックを並列実行する。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Databricks Jobsの「For Eachタスク」を使用すると、リスト等で渡された引数（15個のテーブル名など）をループ処理し、同一のタスク（検証ノートブック）を自動的に並列実行できます。これにより、DAGが非常にシンプルになり、保守性が劇的に向上します。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 32:\nデータエンジニアが、既存のDatabricks SQLウェアハウスのクラスタサイズを拡張したいと考えています。\nDatabricks SQLウェアハウスのクラスタサイズを増やすことによるメリットは次のうちどれですか？",
        options: [
            "(A) クエリ実行の遅延 (レイテンシ) を軽減します。",
            "(B) SQLウェアハウスのクラスタサイズは構成できません。代わりに、クラスタ数を増やすことができます。",
            "(C) SQLウェアハウスの起動時間を短縮します。",
            "(D) 大規模クラスターはスポットインスタンスを使用するため、コストが削減されます。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Databricks SQLウェアハウスの「クラスターサイズ（Small, Large, X-Largeなど）」を大きく（スケールアップ）すると、クラスター内のワーカーノードと計算リソースが増加し、処理能力が向上するため、複雑なクエリの実行遅延（レイテンシ）を削減できます。（※同時実行ユーザー数を増やす場合は「スケールアウト」を使用します）。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 33:\nデータエンジニアが宣言型自動化バンドル（旧称：Databricks Asset Bundles）を設定し、アセットを定義済みのターゲットワークスペースにプッシュしたいと考えています。\nデータエンジニアは、この目的を達成するためにどのDatabricks CLIコマンドを使用できますか？",
        options: [
            "(A) databricks bundle deploy",
            "(B) databricks bundle deployment",
            "(C) databricks bundle push",
            "(D) databricks bundle validate"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Databricks Asset Bundles (DABs) で構成ファイルの内容を実際のターゲットワークスペース環境にプッシュして構築・反映させるためのデプロイコマンドは `databricks bundle deploy` です。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 34:\nデータエンジニアがDatabricks SQLパイプラインで受信トランザクションデータを検証しています。一部のレコードの数値フィールドに予期しない記号が含まれています。エンジニアは次のクエリを実行します。\n\nSELECT COALESCE(CAST(\"100$\" AS INT), 0)\n\nこのクエリの結果を最も適切に表しているのは、次のうちどれですか？",
        options: [
            "(A) NULL",
            "(B) 0",
            "(C) 100",
            "(D) エラーが発生しました"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：標準の `CAST` は、無効な文字が含まれていると変換できずに「実行時例外（エラー）」を発生させます。そのため、エラーによって内側の処理がクラッシュし、外側の `COALESCE` 関数（NULLなら0を返す関数）まで到達しません。エラーを出さずに0にフォールバックさせたい場合は、内側で `TRY_CAST` を使用する必要があります。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 35:\n以下の記述のうち、CREATE SCHEMAコマンドの使用方法を最もよく説明しているのはどれですか？",
        options: [
            "(A) データベース (スキーマ) を作成するために使用されます。",
            "(B) これはスキーマを推論して「cloudFiles.schemaLocation」に保存するために使用されます。",
            "(C) ターゲットテーブルにデータを書き込む際にスキーマをマージするために使用されます。",
            "(D) テーブルスキーマ(列名とデータ型)を作成するために使用されます。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Databricks（およびApache Spark）において、`CREATE SCHEMA` は `CREATE DATABASE` と全く同じ動作をするエイリアスであり、カタログの中にテーブルを格納するためのコンテナであるデータベース（スキーマ）を作成するために使用されます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 36:\nメダリオンアーキテクチャにおいて、ブロンズ層 (Bronze Layer) を最もよく表しているのは次のうちどれですか？",
        options: [
            "(A) これは、ビジネスレベルで集計されたデータを提供します。",
            "(B) これは、フィルタリング、クリーニング、および強化されたデータのバージョンを表します。",
            "(C) 分析、機械学習、および本番環境アプリケーションを支えるデータを保持します。",
            "(D) さまざまなソースから取り込まれた生データを保持します。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：ブロンズ層（Bronze Layer）は、Kafkaストリームや各種ファイルなどのソースシステムから取り込まれた、加工やクレンジングが行われていない元のままの「生データ (Raw data)」を保持する初期ランディングレイヤーです。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 37:\n以下の項目のうち、Deltaテーブルのネイティブ機能であるものはどれですか？（2つ選択してください）",
        options: [
            "(A) Delta Lakeは、JSON形式を使用して効率的なテーブルデータ保存を可能にします。",
            "(B) Delta Lakeは、書き込み操作のたびに古いデータバージョンを自動的に削除して、容量を節約します。",
            "(C) Delta Lakeは、クラウドオブジェクトストレージなどの基盤となるストレージシステムを一切必要としません。",
            "(D) Delta Lakeは、テーブルを手動で再作成することなく、新しいオプション列を追加するようにテーブルスキーマを進化させることができます。",
            "(E) Delta Lakeは、テーブルスキーマに準拠しない書き込みを防止します。"
        ],
        answerIndex: [3, 4],
        explanation: "解答：(D), (E)\n\n解説：Delta Lakeの代表的なネイティブ機能は、予期せぬデータ型の挿入をブロックしてデータ品質を守る「スキーマ強制 (Schema Enforcement)」と、`mergeSchema` オプション等によりテーブルを再作成せず列を安全に追加できる「スキーマ進化 (Schema Evolution)」です。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 38:\nデータエンジニアが、トランザクションのタイムスタンプ、操作の種類、実行ユーザーなど、過去 30 日間に Delta テーブルに加えられたすべての変更を確認したいと考えています。どのコマンドを使用すればよいでしょうか？",
        options: [
            "(A) DESCRIBE HISTORY my_table",
            "(B) SELECT * FROM my_table VERSION AS OF <version_number>",
            "(C) DESCRIBE DETAIL my_table",
            "(D) DESCRIBE EXTENDED my_table"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Delta Lakeの `DESCRIBE HISTORY` コマンドを使用すると、テーブルに対していつ、誰が、どのような操作（INSERTやMERGE等）を実行したか、影響を受けた行数はいくつかといったトランザクションログと監査証跡の完全なリストを取得できます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 39:\nCTAS (CREATE TABLE AS SELECT) ステートメントに関して、以下の記述のうち正しくないものはどれですか？",
        options: [
            "(A) CTASステートメントは手動でのスキーマ宣言をサポートします。",
            "(B) CTASステートメントを使用すると、テーブル作成時にデータが挿入されます。",
            "(C) CTASステートメントは、CREATE TABLE AS SELECT ステートメントの略です。",
            "(D) CTASステートメントはクエリ結果からスキーマ情報を自動的に推測します。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：CTAS (CREATE TABLE AS SELECT) は、SELECT文で取得したクエリ結果から列名やデータ型といったスキーマ情報を自動的に推論してテーブルを作成し、同時にデータを挿入します。そのため、括弧を用いた手動でのスキーマ宣言（データ型の明示的な定義）とは併用できません。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 40:\nデータエンジニアは、アプリケーションID「fe7bcf95-ab87-4dce-a2fd-8c55f8158a02」を持つサービスプリンシパルに、enterprise.reporting.transactions テーブルへの読み取り専用アクセス権を付与するよう指示されました。\nどのSQLコマンドを使えば、最小限の権限で正しくアクセス権限を付与できますか？",
        options: [
            "(A) GRANT SELECT ON TABLE enterprise.reporting.transactions TO `fe7bcf95...`;\nGRANT USE CATALOG ON CATALOG enterprise TO `fe7bcf95...`;",
            "(B) GRANT SELECT ON TABLE enterprise.reporting.transactions TO `fe7bcf95...`;",
            "(C) GRANT SELECT ON TABLE enterprise.reporting.transactions TO `fe7bcf95...`;\nGRANT USE SCHEMA ON SCHEMA enterprise.reporting TO `fe7bcf95...`;",
            "(D) GRANT SELECT ON TABLE enterprise.reporting.transactions TO `fe7bcf95...`;\nGRANT USE SCHEMA ON SCHEMA enterprise.reporting TO `fe7bcf95...`;\nGRANT USE CATALOG ON CATALOG enterprise TO `fe7bcf95...`;"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Unity Catalogの仕様として、対象のテーブルに対して `SELECT` アクセスを行うには、テーブル自身に対する読み取り権限に加え、その親コンテナであるスキーマに対する `USE SCHEMA` 権限と、さらにその親であるカタログに対する `USE CATALOG` 権限をすべて明示的に付与する必要があります。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 41:\nデータエンジニアは、「City ZipCode」（例：「Paris 75015」）という形式で場所を示す location 列を持つ DataFrame df を持っています。彼らは、元の場所列を削除し、city と zip_code という2つの新しい列を作成したいと考えています。\nデータエンジニアはどのPySparkコードスニペットを使用すべきでしょうか？",
        options: [
            "(A) df.select(split('location', ...).alias('places'))",
            "(B) df.select(explode('location').alias('places')).select(...)",
            "(C) df.withColumn(\"city\", split(col(\"location\"), \" \")[0]).withColumn(\"zip_code\", split(col(\"location\"), \" \")[1]).drop(\"location\")",
            "(D) df.withColumn(\"city\", getItem(col(\"location\"), 0)).withColumn(\"zip_code\", getItem(col(\"location\"), 1)).drop(\"location\")"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：文字列を分割するには `split(col(\"列名\"), \"区切り文字\")` を使用します。これにより配列が生成されるため、1つ目の要素（都市）は `[0]` インデックスで、2つ目の要素（郵便番号）は `[1]` インデックスで取得し、`withColumn` で新しい列として追加します。最後に `drop` で元の列を削除するこのアプローチが正解です。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 42:\nデータパイプラインチームは、ピーク時間帯に予定されていた複数のジョブの実行が遅延し、予定時刻よりも遅れて開始されることに気づいた。\nこの行動に対する最も可能性の高い説明は何でしょうか？",
        options: [
            "(A) ワークフローはキューイングが有効になっており、max_concurrent_runs の制限に達しています。",
            "(B) ジョブは timeout_seconds の値が低すぎるため、再試行が遅延します。",
            "(C) このクラスターは、頻繁に終了されるスポットインスタンスを使用しています。",
            "(D) タスク間の依存関係により、循環的な実行遅延が発生しています。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Databricks Jobsには同時実行数の上限を設定する `max_concurrent_runs` パラメータがあります。ピーク時にジョブが頻繁にトリガーされ、この上限に達した場合、新しいジョブは即座に失敗するのではなく「キューイング（QUEUED状態）」されて待機します。実行枠が空き次第開始されるため、予定時刻よりも開始が遅延しているように見えます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 43:\nデータエンジニアリングチームは、トラフィック量の多い外部テーブルを管理対象テーブルに移行しています。進行中の分析ワークロードや業務運営への影響を最小限に抑えるため、移行プロセスは最小限の中断で済む必要があります。この要件を満たすために、彼らは `ALTER TABLE … SET MANAGED` と `DEEP CLONE` のどちらのアプローチを使用するかを決定する必要があります。\nこの変換において `DEEP CLONE` と比較して `SET MANAGED` によって得られる利点は何ですか？（2つ選択してください）",
        options: [
            "(A) SET MANAGEDは、予測最適化を使用して、変換処理がオフピーク時に実行されるようにスケジュールします。",
            "(B) SET MANAGEDは、データコピー時間を短縮するために、デルタトランザクションログのみを移行します。",
            "(C) SET MANAGEDは、リーダーとライターのダウンタイムを最小限に抑えます。",
            "(D) SET MANAGED は、変換中の同時書き込みを処理します。",
            "(E) SET MANAGED はデータをそのまま残し、既存のテーブルの場所を参照するだけです。"
        ],
        answerIndex: [2, 3],
        explanation: "解答：(C), (D)\n\n解説：外部テーブルから管理対象テーブルへ移行する際、`SET MANAGED` を使用すると、変換中でもリーダーおよびライターの操作（同時書き込み等）を継続でき、移行に伴うダウンタイムをほぼゼロに抑えることができるという大きな利点があります。データやトランザクションログはバックグラウンドで安全にコピー移行されます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 44:\nDatabricks Jobsにおいて、データエンジニアはタスクAとタスクBの間に線形依存関係（Aが終わったらBを実行）を設定するために、次のうちどの方法を使用できますか？",
        options: [
            "(A) タスクAには注文番号1を、タスクBには注文番号2を割り当てることができる。",
            "(B) dbutils.jobsユーティリティを使用して、ノートブックレベルで依存関係を設定できます。",
            "(C) タスクBの設定の「依存先 (Depends on)」フィールドでタスクAを選択できます。",
            "(D) ジョブキャンバス上で、タスクAからタスクBへ矢印をドラッグアンドドロップすることで視覚的に操作できます。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Databricksのジョブワークフローにおいて、タスク間の実行順序や依存関係を定義するには、後続タスクの設定画面内にある「依存先 (Depends on)」プロパティのドロップダウンから、先行して完了すべき上流タスクを選択します。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 45:\nデータエンジニアは既存のDatabricksジョブを持っており、それを宣言型自動化バンドル (DABs) を使用して管理したいと考えています。Databricks CLIを使用して、既存ジョブのYAML定義を自動的に取得し、参照されている成果物（ノートブック等）をダウンロードし、新しいジョブではなく既存のジョブとリンクさせる（更新バインドする）必要があります。\n以下のコマンドのうち、データエンジニアがこれを実現できるのはどれですか？",
        options: [
            "(A) databricks bundle clone job --existing-job-id <job_id> --link",
            "(B) databricks bundle download job --existing-job-id <job_id> --bind",
            "(C) databricks bundle get job --existing-job-id <job_id> --link",
            "(D) databricks bundle generate job --existing-job-id <job_id> --bind"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：既存のワークスペース上のジョブ定義からバンドル設定（YAML）や関連ファイルをローカルに生成抽出するコマンドは `databricks bundle generate` です。さらに `--bind` フラグを付けることで、生成された構成が新しいジョブを作成するのではなく、既存のジョブIDへデプロイされるように自動的に紐付け（リンク）されます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 46:\nデータエンジニアリングチームは、結合処理中に偏ったデータ（データスキュー）を処理するSparkジョブを実行する必要があり、その結果、パフォーマンスの遅延が発生する可能性があります。クラスターでは、アダプティブクエリ実行（AQE）が有効になっています。\nこの場合、AQEはデータの歪みをどのように解消するのに役立つのでしょうか？",
        options: [
            "(A) AQEは、分散処理の利点を維持しながら実行効率を向上させるために、パーティショニングを完全に無効にします。",
            "(B) AQEは、負荷分散と並列処理の向上を図るため、すべての結合をデカルト積に変換します。",
            "(C) AQEは偏ったパーティションを自動的に検出し、並列処理のためにそれらをより小さなサブパーティションに分割します。",
            "(D) AQEはデータセットから偏ったデータを除去し、データの偏りの影響を動的に軽減します。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：アダプティブクエリ実行（AQE）の「スキュー結合最適化 (Skew Join Optimization)」機能は、結合ステージで特定のパーティションにデータが極端に偏っていることを実行時に自動検出し、その巨大なパーティションをより小さなサブパーティションに分割します。これにより、タスクがワーカー間で均等に分散され、並列処理が改善します。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 47:\nデータエンジニアは現在、自動終了時間を6時間に設定した汎用クラスタを使用して、毎晩増分ETLジョブを実行しています。ワークロードの完了時間は毎晩異なり、1～3時間かかります。彼らは、同じスケジューリング動作を維持しながら、コンピューティングコストを削減したいと考えています。\nデータエンジニアは、コンピューティングコストを削減するために、どの手法を用いるべきでしょうか？",
        options: [
            "(A) 汎用クラスタの自動終了設定を3時間に短縮する。",
            "(B) 汎用クラスタをより小さなワーカーノードを使用するように構成します。",
            "(C) AvailableNowトリガーオプションを使用して、ストリーム処理を自動的に停止します。",
            "(D) ワークロード完了後に自動的に終了するジョブクラスター (Job Compute) を使用する。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：定時実行されるETLジョブには「ジョブクラスター（Job Compute）」を使用するのが最適です。ジョブクラスターは汎用クラスターよりもDBU料金が安く、さらにジョブの完了と同時にクラスターが即時終了するため、完了時間が変動しても不要なアイドル時間が1秒も発生せず、コストを劇的に削減できます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 48:\nデータエンジニアが、大きな Spark DataFrame に対して `df.toPandas()` を実行した後に `java.lang.OutOfMemoryError` (OOM) が発生しました。\nこの問題を解決するために、データエンジニアはどのような行動を取るべきでしょうか？",
        options: [
            "(A) エグゼキュータメモリを増やす",
            "(B) アダプティブクエリ実行 (AQE) を有効にする",
            "(C) シャッフルパーティションの数を増やす",
            "(D) ドライバメモリを増やす"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：`toPandas()` や `collect()` などのアクションメソッドを実行すると、Sparkはクラスター全体（エグゼキュータ側）に分散しているすべてのデータを収集し、単一のノードである「ドライバノード」のローカルメモリに強制的に送信・集約します。データ量が多すぎてこのドライバ側のメモリが溢れたことがOOMの原因であるため、解決策はドライバメモリを増やすことです。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 49:\nAuto Loaderがデータを増分的にロードするために使用する基盤技術は次のうちどれですか？",
        options: [
            "(A) COPY INTO",
            "(B) Spark Structured Streaming (構造化ストリーミング)",
            "(C) DEEP CLONE",
            "(D) Multi-hop architecture"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Auto Loaderは、Databricksが「Spark Structured Streaming（構造化ストリーミング）」エンジンを拡張して構築した機能です。バックグラウンドではストリーミング技術を利用して、クラウドストレージ上の新規ファイル（cloudFiles）を継続的かつ効率的に増分処理します。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 50:\nデータエンジニアリングチームは、Unity Catalog 内の拡大し続ける管理対象 Delta テーブルにおける最適なデータレイアウト戦略について議論しています。クエリパフォーマンスを向上させるために、パーティショニング、Z オーダー、および Liquid Clustering の導入を検討しています。\nどのシナリオが、自動Liquid Clustering (リキッドクラスタリング) が推奨される選択肢であることを最もよく示していますか？",
        options: [
            "(A) チームは、このテーブルに対して安定したクラスタリングキーを特定した。",
            "(B) 記載されているオプションはいずれも正しくありません。自動リキッドクラスタリングは管理対象テーブルには適用できません。",
            "(C) この表は、一貫した少数の日付範囲によって厳密にフィルタリングされています。",
            "(D) このテーブルでは、複数の列にわたって多様で頻繁に変化するクエリフィルタが適用され、アクセスパターンも予測不可能です。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Liquid Clusteringは、時間の経過とともに変化する複雑で予測不可能なクエリパターン（WHERE句の条件となる列が頻繁に変わる、または複数列の組み合わせがランダムに指定されるなど）に対して、データを動的かつ継続的に再編成してスキップ効率を高めるよう設計された柔軟な最適化機能です。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 51:\nデータエンジニアが、S3バケットからJSONデータを取り込むためのDatabricks Auto Loaderストリームを設定しています。受信データに新しい列が検出された場合、パイプラインは失敗するはずですが、それらの新しい列はスキーマに追加され、後続の実行が「更新されたスキーマ」で正常に再開できるようにする必要があります。既存の列は、そのデータ型を維持する必要があります。\n\nspark.readStream \\\n  .option(\"cloudFiles.schemaEvolutionMode\", \"_______________\") \\\n\n指定された要件を満たすために、空欄に正しく記入できる選択肢はどれですか？",
        options: [
            "(A) none",
            "(B) addNewColumns",
            "(C) rescue",
            "(D) failOnNewColumns"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Auto Loaderのデフォルト動作である `addNewColumns` モードでは、ストリームが新しい列を検出した際に、そのバッチの処理を意図的に失敗させて停止しますが、同時にターゲットのスキーマを自動的に更新（新しい列を追加）します。そのため、次回ジョブを再起動した際には更新済みのスキーマとして正常に処理を再開できます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 52:\nデータエンジニアリングチームは、それぞれ数百の列と数十億のレコードを含む複数の大規模データセットを結合する、大規模なETLパイプラインを処理しています。結合フェーズ中に、Sparkエグゼキュータが繰り返しデータをディスクに書き出しており、過剰なシャッフルによってパフォーマンスが著しく低下していることに気づきました。\nこの業務のパフォーマンスを向上させるために、チームはどのようなリソース最適化を優先すべきでしょうか？",
        options: [
            "(A) ストレージ最適化 (Storage Optimized)",
            "(B) メモリ最適化済み (Memory Optimized)",
            "(C) GPU最適化済み",
            "(D) 計算最適化 (Compute Optimized)"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：巨大なデータセットの結合（Join）処理では、一時的に大量のデータがメモリに保持されます。メモリが不足するとデータがディスクに一時退避（ディスクスピル）され、激しいI/Oオーバーヘッドによって処理が著しく遅延します。この場合、ワーカーノードのRAM容量が極めて多い「メモリ最適化 (Memory Optimized)」インスタンスに変更することで、メモリ内ですべての処理を完結させてパフォーマンスを向上させることができます。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 53:\nデータエンジニアは、複数の企業ソース（Salesforce、SQLデータベース、Kafkaストリーム、Azure Data Lake Storage）から販売取引データを段階的にUnity Catalogテーブルに取り込みたいと考えています。\nデータエンジニアはこの要件を満たすために、どの構成を使用すべきでしょうか？",
        options: [
            "(A) CDC対応の全ソースに対応する単一の標準コネクタ",
            "(B) CDC対応の全ソースに対応する単一の統合Lakeflowコネクタ",
            "(C) CDC対応の全ソース向け単一管理コネクタ",
            "(D) CDCを使用したソースカテゴリごとの個別のコネクタの分離"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Lakeflow Connectなどにおけるデータ取り込みでは、SaaS（Salesforce）、リレーショナルDB（SQL）、メッセージバス（Kafka）、オブジェクトストレージ（ADLS）といったテクノロジーはそれぞれAPI構造やCDC（変更データキャプチャ）の仕組み、認証方法が全く異なります。そのため、これらすべてを処理する「単一の汎用コネクタ」は存在せず、ソーステクノロジーごとに適切な個別コネクタを別々に構成して分離する必要があります。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 54:\nデータエンジニアが、`./src/my_notebook.py` にあるノートブックを実行するジョブを定義する Databricks Asset Bundles (DABs) を準備しています。YAML 設定を作成する際に、エンジニアは次のように記述しました。\n\nbundle:\n    name: my_bundle\n____________:\n  jobs:\n    my_job:\n      tasks:\n        - task_key: test_task\n          notebook_task:\n            notebook_path: './src/my_notebook.py'\n\nバンドルが有効かつデプロイ可能であることを保証するには、上記の空白部分にどのキーを正しく置き換える必要がありますか？",
        options: [
            "(A) workflows",
            "(B) settings",
            "(C) pipelines",
            "(D) resources"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Databricks Asset BundlesのYAML設定（`databricks.yml`）において、ジョブ、パイプライン、クラスターなどのデプロイ対象オブジェクトを包括的に定義するトップレベルのキーは `resources` です。"
    },
    {
        course: "exam3",
        category: "模擬試験",
        question: "問題 55:\nデータエンジニアがリモートGitリポジトリからGitフォルダを更新するために使用できる操作は次のうちどれですか？",
        options: [
            "(A) Push (プッシュ)",
            "(B) Commit (コミット)",
            "(C) Pull (プル)",
            "(D) Clone (クローン)"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：リモートリポジトリ（GitHubなど）で発生した最新の変更内容を取得・ダウンロードし、Databricksワークスペース内のローカルGitフォルダに反映（更新）させる操作は「Pull（プル）」です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 1:\nグローバル航空会社は、複数の国からのフライト予約情報を保管しています。予約のタイムスタンプは、各空港の現地時間帯で記録されます。\n正確な報告と顧客活動の追跡を確実にするために、タイムスタンプはどのように標準化されるべきでしょうか？",
        options: [
            "(A) タイムゾーンのコンテキストなしでタイムスタンプを保存する",
            "(B) 読みやすさを考慮して、すべてのタイムスタンプを文字列型で保存する",
            "(C) タイムスタンプは現地時間で保持し、タイムゾーン変換はBIツールでのみ適用する",
            "(D) すべてのタイムスタンプをUTCのTIMESTAMP型として保存する"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：グローバルなデータアーキテクチャにおいては、タイムスタンプを協定世界時（UTC）で保存することが絶対的に最善のプラクティスです。これにより、タイムゾーン間の曖昧さや夏時間（DST）によるデータの異常を防ぎ、インデックス作成やソートのパフォーマンスも向上します。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 2:\nデータエンジニアが、製品販売データを処理するためのLakeflow Spark宣言型パイプライン（旧Delta Live Tables）を構築しています。このパイプラインは、以下のデータ品質ルールを適用する必要があります。\n\nvalid_products = {\"valid_id\": \"products_id IS NOT NULL\", \"recent_sales\": \"date >= '2025-01-01'\", \"quantity_within_range\": \"quantity BETWEEN 0 AND 1000\"}\n\n無効なレコードはすべてターゲットに書き込まれる必要があり、同時にこれらの違反に関するメトリクスはパイプラインによって収集されます。以下の構成のうち、これらの要件を満たすものはどれですか？",
        options: [
            "(A) @dp.table\n@dp.expect_or_fail(valid_products)\ndef silver_sales():\n    return spark.readStream(\"bronze_sales\")",
            "(B) @dp.table\n@dp.expect(valid_products)\ndef silver_sales():\n    return spark.readStream(\"bronze_sales\")",
            "(C) @dp.table\n@dp.expect_or_drop(valid_products)\ndef silver_sales():\n    return spark.readStream(\"bronze_sales\")",
            "(D) @dp.table\n@dp.expect_all(valid_products)\ndef silver_sales():\n    return spark.readStream(\"bronze_sales\")"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：辞書（ディクショナリ）形式で定義された複数のデータ品質ルールをまとめて適用し、違反レコードも破棄せずにメトリクスとして収集するには `@dp.expect_all()` を使用します。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 3:\n以下のうち、ゴールドテーブル (Gold table) を情報源として利用する最も一般的なものはどれですか？",
        options: [
            "(A) オートローダー (Auto Loader)",
            "(B) ブロンズテーブル (Bronze table)",
            "(C) ダッシュボード (Dashboard)",
            "(D) シルバーテーブル (Silver table)"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：ゴールドテーブルは、特定のビジネスユースケースに合わせて高度に集計・精製されたデータを提供します。そのため、BIツールでのレポート作成やダッシュボードの直接の情報源として利用されます。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 4:\nデータエンジニアは、トランザクションデータをSilverテーブルにロードする前に、データのクリーニングを行っています。データ品質を向上させるために、エンジニアは次のPySparkコマンドを使用します。\n\ndf.na.drop(how='all')\n\nこのコマンドの効果は何ですか？",
        options: [
            "(A) 行内のすべての列がnullの場合にのみ行を削除します。",
            "(B) いずれかの列にnull値が含まれる行を削除します。",
            "(C) すべてのnull値を空の文字列に置き換えます。",
            "(D) すべての列がnullでない行を削除します。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：`df.na.drop()` の `how` パラメータを `'all'` に設定すると、指定された行の「すべての列」が NULL または NaN である完全に空のレコードのみを削除します。1つでも有効な値が含まれていれば、その行は削除されずに保持されます。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 5:\nデータエンジニアは、host:port のリモート Kafka ブローカーでホストされている events_topic という名前の Kafka トピックからイベントのストリームを消費するタスクを任されています。\n以下のコードスニペットのうち、このKafkaトピックから読み込むためのストリーミングDataFrameをPySparkで正しく構築しているのはどれですか？",
        options: [
            "(A) eventsStream = (spark.readStream.format(\"kafka\").option(\"kafka.bootstrap.servers\", \"host:port\").option(\"subscribe\", \"events_topic\").option(\"startingOffsets\", \"latest\").load())",
            "(B) eventsStream = spark.readStream.format(\"kafka\").load(\"host:port\", \"events_topic\", \"latest\")",
            "(C) eventsStream = (spark.readStream.format(\"cloud_files\").option(\"cloudFiles.format\", \"kafka\")...load())",
            "(D) eventsStream = spark.readStream.kafka(\"host:port\", \"events_topic\", \"latest\")"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Kafkaからストリームを読み込む正しいPySpark構文は、`format(\"kafka\")` を指定した上で、`.option()` メソッドを使ってブローカーアドレス（kafka.bootstrap.servers）、トピック名（subscribe）、および開始オフセット（startingOffsets）を明示的に指定して `load()` を呼び出すアプローチです。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 6:\nデータエンジニアが、price という名前の列を含む複数の列を持つ productsDf という PySpark DataFrame を扱っています。元の DataFrame のスキーマを変更せずに、クエリ出力で price 列を unit_price という一時的なエイリアスで表示しながら、DataFrame から「すべての列」を返したいと考えています。\nこの要件を満たすPySparkコード断片はどれですか？",
        options: [
            "(A) productsDf.select(col(\"*\"), col(\"price\").alias(\"unit_price\"))",
            "(B) productsDf.selectExpr(\"price as unit_price\")",
            "(C) productsDf.select(col(\"price\").alias(\"unit_price\"))",
            "(D) productsDf = productsDf.withColumnRenamed(\"price\", \"unit_price\")"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：元のデータフレームのスキーマを変更せずに出力だけを調整するためには `select` を使用します。元のすべての列を含めるための `col(\"*\")` と、価格列を別名で表示するための `col(\"price\").alias(\"unit_price\")` を組み合わせることで要件を満たします。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 7:\nエンジニアリングチームは、頻繁に更新と削除が行われる大規模なDelta Lakeテーブルを管理しています。彼らは、小さなデータファイルの増加により、クエリのパフォーマンスが時間とともに低下していることに気づきました。この問題を解決するため、頻繁に使用される列に対して Z-Order インデックスを設定した OPTIMIZE コマンドを実行することにしました。\nこれらのコマンドが効率的に実行されるようにするために、エンジニアリングチームはどのようなリソース最適化を優先すべきでしょうか？",
        options: [
            "(A) 計算最適化 (Compute Optimized)",
            "(B) GPU最適化済み",
            "(C) メモリ最適化済み (Memory Optimized)",
            "(D) ストレージ最適化 (Storage Optimized)"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：`OPTIMIZE` によるファイルの圧縮と `ZORDER` によるデータの再ソートは、非常に高いCPU負荷を伴う計算処理です。そのため、これらのタスクを効率的に処理するには、CPUパワーと並列処理能力に優れた「計算最適化 (Compute Optimized)」クラスターを優先して使用すべきです。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 8:\nDatabricks ジョブにおける Cron 構文を説明しているのは次のうちどれですか？",
        options: [
            "(A) これはジョブの実行タイムアウトを表す表現です。",
            "(B) これは、ジョブの最大同時実行数を表す表現です。",
            "(C) これは、プログラムで定義できる複雑なジョブスケジュールを表す表現です。",
            "(D) これはジョブの再試行ポリシーを表す表現です。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Cron構文（例: `0 0 12 * * ?`）を使用することで、「毎月第1月曜日の午後12時」のような、プログラムで定義可能な複雑かつ柔軟なジョブの実行スケジュールを表現できます。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 9:\nDatabricks Intelligence Platformにおいて、データウェアハウジングソリューションを提供するサービスは次のうちどれですか？",
        options: [
            "(A) SQLウェアハウス",
            "(B) Unity Catalog",
            "(C) Lakeflow Connect",
            "(D) Databricks SQL"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Databricksプラットフォーム上で動作し、BIツールとの統合やSQLクエリの実行に特化したサーバーレスのデータウェアハウス機能を提供するサービス（製品名）は「Databricks SQL」です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 10:\nデータエンジニアリングチームは、SnowflakeからDatabricksへ6時間ごとに販売データを同期する必要があります。不要な処理や重複を避けるため、変更されたレコードのみを取り込むようにしてください。\nこの要件を最も満たす取り込み方法はどれですか？",
        options: [
            "(A) Snowflakeのデータをファイルにエクスポートし、6時間ごとにターゲットテーブルに追加する。",
            "(B) Snowflakeテーブルは6時間ごとに完全に更新されます。",
            "(C) Snowflake用の Lakeflow マネージドコネクタを使用した増分データ取り込み",
            "(D) Snowflakeからの構造化ストリーミング取り込み"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Lakeflow Connectのマネージドコネクタ（Snowflake用）を使用すると、追加コードなしで完全管理型の増分データ取り込み（変更データのキャプチャ）が可能になり、不要な計算オーバーヘッドや重複処理を回避しつつ、定期的なスケジュール同期をシームレスに実現できます。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 11:\nメダリオンアーキテクチャにおいて、ゴールドレイヤー (Gold Layer) テーブルを最も適切に説明しているのは、次のうちどれですか？",
        options: [
            "(A) さまざまなソースから取り込んだ生データを保持しています。",
            "(B) これらは、分析、機械学習、および本番環境アプリケーションを支えるビジネスレベルの集計機能を提供する。",
            "(C) このレイヤーのテーブル構造は、ソースシステムのテーブル構造に似ていますが、ロード時間などの追加のメタデータ列が含まれています。",
            "(D) これらは、フィルタリング、クリーニング、および強化されたデータのバージョンを表しています。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：ゴールドテーブルは、ビジネスインテリジェンス（BI）、ダッシュボード、機械学習モデル向けに高度に洗練・集計されたデータセットを提供する、メダリオンアーキテクチャの最終層です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 12:\nデータアーキテクトは、オンプレミスデータベースに安全に接続できるハイブリッドデータプラットフォームを設計しています。これらのデータベースは、Databricks内からSQLを使用してクエリを実行する必要があり、コンプライアンス上の理由から、プラットフォームは企業の独自ネットワーク内に留まる必要があります。\nこのアーキテクチャをサポートするために、設計者はどのコンピューティングタイプを選択すべきでしょうか？",
        options: [
            "(A) ジョブ向けのサーバーレスコンピューティング",
            "(B) ノートブック向けサーバーレスコンピューティング",
            "(C) サーバーレスSQLウェアハウス",
            "(D) Pro SQL Warehouse (プロSQLウェアハウス)"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：企業のプライベートネットワーク（VPC/VNet）内にデプロイされ、オンプレミスのデータベース等へ直接セキュアにルーティングする必要がある場合、Databricks側のネットワークで稼働する「サーバーレス」ではなく、顧客ネットワーク内にデプロイできる「Pro SQL Warehouse」を選択する必要があります。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 13:\nシニアデータエンジニアは、データ探索において `df.describe()` の代わりに `df.summary()` を使用することを提案しました。\n`df.summary()` は `df.describe()` と比較してどのような利点がありますか？",
        options: [
            "(A) df.summary() は、df.describe() では取得できない近似四分位数（25%、50%、75%）などの拡張された統計情報を提供します。",
            "(B) df.summary() は、統計を計算する前にNull値を自動的にクリーンアップし、外れ値を除外します。",
            "(C) df.summary() は、データセットに対するAI生成の要約を提供し、実際のデータ値に基づいたインサイト、パターン、推奨事項を提示します。",
            "(D) df.summary() は、データセットの各列に対して視覚的なチャートやインタラクティブなプロットを生成します。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：PySparkにおいて、`describe()` はカウント、平均、標準偏差、最小値、最大値という固定の統計情報のみを返します。一方、`summary()` はそれに加えて、25%、50%（中央値）、75%の近似四分位数を自動的に計算して提供するという利点があります。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 14:\nデータエンジニアは、Lakeflow Spark Declarative Pipeline (旧称 Delta Live Tables) で以下のデータ品質制約を定義しました。\n\nCONSTRAINT valid_id EXPECT (id IS NOT NULL) _____________\n\n上記の空欄を埋めて、この制約に違反するレコードが「対象テーブルに追加され、メトリクスに報告される」ようにしてください。",
        options: [
            "(A) ON VIOLATION NONE",
            "(B) ON VIOLATION FAIL UPDATE",
            "(C) ON VIOLATION ADD ROW",
            "(D) ON VIOLATION句を追加する必要はありません。デフォルトで制約に違反するレコードは保持され、イベントログに報告されます。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：DLTにおいて、`EXPECT` 制約（ON VIOLATION句なし）のみを指定した場合、デフォルトの動作として「違反したレコードはテーブルにそのまま書き込まれるが、違反の事実はデータ品質メトリクスやイベントログに警告として記録される」という動作になります。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 15:\nDatabricksクラスターでスポットインスタンス (Spot Instances) を使用する主な利点は何ですか？",
        options: [
            "(A) セキュリティとコンプライアンスの強化",
            "(B) データストレージの遅延が軽減されること",
            "(C) ジョブ実行時間の保証",
            "(D) 計算コストの大幅な削減"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：クラウドプロバイダーの余剰コンピューティングリソースを活用するスポットインスタンスを使用する最大の利点は、オンデマンドインスタンスと比較して運用コストを大幅（最大90%程度）に削減できることです。ただし、予期せぬ中断のリスクが伴います。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 16:\nUnity Catalogで管理されるDeltaテーブルにおいて、Automatic Liquid Clustering (自動リキッドクラスタリング) はどの列をクラスタリングキーとして使用するかをどのように決定するのですか？",
        options: [
            "(A) テーブル作成時に指定された、事前定義されたクラスタリング列からインテリジェントに選択します。",
            "(B) 予測最適化を活用して、観測されたクエリ動作に基づいて最適なクラスタリングキーを選択します。",
            "(C) スキーマ内の列定義のタイプと順序に基づいて、最適なクラスタリングキーを自動的に決定します。",
            "(D) 高度なサンプリング戦略を活用し、すべてのファイル間でデータを均一にバランスさせた後、列の選択をランダム化します。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Databricksの「自動」Liquid Clusteringは、予測最適化（Predictive Optimization）の機能と統合されており、実際のアクセスパターンやクエリ動作を継続的に監視・分析することで、手動でキーを指定しなくても自動的に最適なクラスタリングキーを選択してレイアウトを最適化します。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 17:\nデータエンジニアが、パーティション間でデータを再配置する必要がある広範囲な変換を実行するSparkジョブを実行しましたが、ExecutorLostFailureエラーメッセージが表示されて失敗しました。\nこの問題を解決するために、データエンジニアはどの2つの行動を取るべきでしょうか？（2つ選択してください）",
        options: [
            "(A) Photonエンジンを有効にする",
            "(B) エグゼキュータあたりのコア数を増やす",
            "(C) シャッフルパーティションの数を増やす",
            "(D) ドライバメモリを増やす",
            "(E) エグゼキュータメモリを増やす"
        ],
        answerIndex: [2, 4],
        explanation: "解答：(C), (E)\n\n解説：シャッフル処理中に発生する `ExecutorLostFailure`（通常は OOM: メモリ不足エラーが原因）を防ぐには、物理的に「エグゼキュータのメモリを増やす」ことと、処理の単位を細かくして1タスクあたりのメモリ負荷を下げるために「シャッフルパーティションの数を増やす（spark.sql.shuffle.partitions）」ことが直接的な解決策になります。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 18:\nデータエンジニアは、以下のオートローダーストリームを使用して、オブジェクトクラウドストレージからJSONファイルをDeltaテーブルに段階的に取り込んでいます。\n\nspark.readStream.format(\"cloudFiles\")\n  .option(\"cloudFiles.format\", \"json\")\n  _____________________________\n  .load(cloud_storage_path)\n\nデータ修正を適用するために、同じパスとファイル名でファイルが再アップロードされる場合があります。これらの修正をテーブルに読み込むために、空欄に正しく記入されるオプションはどれですか？",
        options: [
            "(A) .option(\"mergeSchema\", \"true\")",
            "(B) .option(\"cloudFiles.force\", \"true\")",
            "(C) .option(\"cloudFiles.includeExistingFiles\", \"true\")",
            "(D) .option(\"cloudFiles.allowOverwrites\", \"true\")"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Auto Loaderのデフォルト動作では、一度処理したファイルパスは二度と読み込みません。しかし `cloudFiles.allowOverwrites = true` を設定すると、ファイルパスだけでなく「最終更新日時」も追跡するようになり、同じ名前のファイルが上書き（再アップロード）された際にそれを検知して再処理できるようになります。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 19:\nデータエンジニアがSpark UIを介してSparkジョブを分析しています。特定のステージで完了した27個のタスクについて、以下の要約メトリクスを取得しました。\nDuration: [25th=20s, Median=25s, 75th=30s, Max=45s]\nGC Time: [25th=32.0ms, Median=44.0ms, 75th=51.0ms, Max=1.9s]\nInput Size: [25th=179KiB, Median=183.9KiB, 75th=186.7KiB, Max=203KiB]\n\nデータエンジニアは上記の統計データからどのような結論を導き出すことができるでしょうか？",
        options: [
            "(A) ステージは大きな問題なく正常に稼働しています。",
            "(B) システムがガベージコレクション（GC）に時間をかけすぎている。",
            "(C) クラスターには、ワークロードを処理するのに十分なリソースがありません。",
            "(D) データがタスク間で均等に分布していないため、データに偏りがあることが示されています。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：タスクの実行時間、入力サイズ、シャッフルサイズが中央値（Median）と最大値（Max）の間で極端な差がなく均一に分布しており、ガベージコレクション時間もタスク実行時間に比べてごくわずか（数ミリ秒〜最大2秒未満）であるため、データの偏りやメモリ不足の兆候はなく、ステージは健全に動作していると結論付けられます。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 20:\n医療分析会社が、数秒ごとに医療画像メタデータファイルをクラウドオブジェクトストレージに受信しています。コンプライアンス要件のため、ストレージには数か月にわたって数千ものアーカイブされたJSONファイルが蓄積されています。\n・アーカイブされたすべてのファイルを正確に一度だけ処理する\n・ほぼリアルタイムで新しい受信ファイルを自動的に検出する\n・ストレージAPI呼び出しとメタデータ一覧表示のオーバーヘッドを最小限に抑える\n\nどの取り込み方法が最も適切でしょうか？",
        options: [
            "(A) オートローダーをディレクトリ一覧表示モードで使用する。",
            "(B) 既存ファイルを処理するためにCOPY INTOを使用し、次にファイル通知モードのAuto Loaderを使用する。",
            "(C) 最初にCTASステートメントを使用してバッチモードでロードし、その後Auto Loaderを使用する。",
            "(D) 現在および将来のファイルについて、イベントベースのファイル検出を有効にするために「ファイル通知モード」を有効にしたAuto Loaderを使用する。"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Auto Loaderの「ファイル通知モード (cloudFiles.useNotifications = true)」を使用すると、初回起動時に既存の履歴ファイルをバックフィルとして自動的にリスト処理しつつ、以降の新規ファイルはクラウドのイベントサービス（Event Grid等）経由でプッシュ通知として受け取ります。これにより、数万件のファイルを抱えるバケットで毎回高コストなディレクトリスキャンを実行するオーバーヘッドを排除し、低遅延を実現します。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 21:\nデータエンジニアリングチームは、Unity Catalogに保存されているユーザーアクティビティイベントテーブルに取り組んでいます。クエリでは、user_id や event_date など、複数の列に対するフィルタがよく使用されます。\nコストのかかるテーブルスキャンを回避するために、チームはどのデータレイアウト手法を採用すべきでしょうか？",
        options: [
            "(A) user_id列にはパーティショニングを、event_date列にはZオーダーインデックスを適用してください。",
            "(B) user_idに対してZオーダーインデックスを使用する",
            "(C) event_date列に対してパーティショニングを使用してください。",
            "(D) user_idとevent_dateの組み合わせに対してLiquid Clusteringを使用する"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：複数の列にまたがる検索条件が頻繁に使用される場合、特定の列への固定的なパーティショニングや単一のZオーダーよりも、両方の列をクラスタリングキーとして指定できる「Liquid Clustering」を使用するのが最も柔軟でスキャン回避に効果的です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 22:\nデータエンジニアは、Lakeflowジョブの実行時間が本番環境で複数回実行されるうちに徐々に増加した理由を調査するよう依頼されました。エンジニアは、実行傾向を視覚化し、過去のジョブ実行時のメトリクスと比較できる機能を必要としています。どのオプションを選択すべきでしょうか？",
        options: [
            "(A) 実行履歴 (Run History)",
            "(B) Catalog Explorer (カタログエクスプローラー)",
            "(C) クエリ履歴 (Query History)",
            "(D) ダッシュボード (Lakeflow Dashboard)"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Databricks JobsのUIに備わっている「実行履歴 (Run / Job History)」タブ機能を使用すると、過去のジョブ実行時間やタスクメトリクスの推移をグラフで視覚的に比較・追跡でき、パフォーマンス低下の傾向を簡単に分析できます。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 23:\nIoTプラットフォームは、デバイスのテレメトリデータをブロンズテーブルに保存します。列 payload は、次のようなJSONデータを含む文字列(STRING)です。\n`{\"device_id\":\"A1\",\"temperature\":22.5,\"humidity\":60}`\nデータエンジニアは、Silverテーブルからフィールドを抽出して、効率的にクエリを実行できるようにする必要があります。\nどの2つのクエリがJSONから正しくデータを抽出しますか？（2つ選択してください）",
        options: [
            "(A) SELECT from_json(payload, 'device_id STRING...') AS parsed_payload FROM bronze_iot;",
            "(B) SELECT payload:device_id AS device_id, payload:temperature AS temperature FROM bronze_iot;",
            "(C) SELECT payload.device_id AS device_id, payload.temperature AS temperature FROM bronze_iot;",
            "(D) SELECT json_extract(payload, 'device_id') AS device_id FROM bronze_iot;",
            "(E) SELECT get_json_object(payload, '$.device_id') AS device_id, get_json_object(payload, '$.temperature') AS temperature FROM bronze_iot;"
        ],
        answerIndex: [1, 4],
        explanation: "解答：(B), (E)\n\n解説：Databricks SQLにおいて、文字列型のJSONデータから直接特定のキーを抽出する正しいネイティブ構文は、コロン演算子を使用する `payload:key` の記法と、組み込み関数である `get_json_object(payload, '$.key')` の2つです。文字列型に対してドット表記（payload.key）は使用できません。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 24:\nデータエンジニアは、Lakeflow Connectを使用して、売上取引データをUnity Catalogテーブルに毎晩取り込むための標準コネクタを開発したいと考えています。エンジニアは、テーブル内の履歴データを30日間保持しつつ、繰り返しロードしても重複が発生しないようにする必要があります。\nデータエンジニアは、これらの要件を満たすためにどのコマンドを使用すればよいでしょうか？",
        options: [
            "(A) INSERT OVERWRITE",
            "(B) COPY INTO",
            "(C) MERGE INTO",
            "(D) INSERT INTO"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：既存の履歴データを保持しつつ、対象のキーが既に存在する場合は更新し、存在しない場合は挿入する（重複を回避する）アップサート処理を行うには `MERGE INTO` コマンドを使用する必要があります。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 25:\nデータエンジニアは、宣言型自動化バンドル (DABs) を使用して、開発環境と本番環境にわたるワークフローを管理します。CI/CDプロセスでは、プルリクエストごとに開発環境におけるバンドル構成を検証する必要があります。本番環境へのマージ時には、システムは自動的に本番環境にデプロイする必要があります。\nこれらの要件を満たす行動の組み合わせはどれですか？",
        options: [
            "(A) PRパイプラインでは `databricks bundle deploy -t dev --verify` を実行し、本番環境では `databricks bundle deploy -t prod` を実行する。",
            "(B) PRパイプラインでは `databricks bundle deploy -t dev` を実行し、本番環境で `databricks bundle run validate -t prod` を実行する。",
            "(C) PRパイプラインでは `databricks bundle validate -t dev` を実行し、本番環境では `databricks bundle deploy -t prod` を実行する。",
            "(D) PRパイプラインでは `databricks bundle run validate -t dev` を実行し、本番環境では `databricks bundle run deploy -t prod` を実行する。"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：CI/CDのプルリクエスト（PR）フェーズでは、構成が正しいかどうかをリソースをデプロイせずにテストする `databricks bundle validate` を実行するのがベストプラクティスです。そして、メインブランチ等へのマージが完了した後に、実際にリソースを作成する `databricks bundle deploy` を本番ターゲットに対して実行します。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 26:\n以下のうち、一般的なエンタープライズアプリケーションからUnity Catalogテーブルへの、ローコードで完全に管理されたデータ取り込みソリューションを提供するものはどれですか？",
        options: [
            "(A) Auto Loader (自動ローダー)",
            "(B) Databricks Connect",
            "(C) Lakeflow Connect マネージドコネクタ",
            "(D) COPY INTO"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Salesforce、Workday、ServiceNowなどの一般的なSaaSエンタープライズアプリケーションから、API連携のコードを書かずにUIベースでUnity Catalogへデータを取り込むフルマネージドサービスは「Lakeflow Connect」のマネージドコネクタです。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 27:\nデータエンジニアは、従業員を部署ごとにグループ化し、従業員の総給与と平均給与を計算する任務を負っています。彼らはPySparkのgroupByを使用し、各グループに複数の集計処理を適用したいと考えています。\n以下のコードスニペットを完成させてください。\n\nresult_df = df.groupBy(\"department\").____________(\n    sum(\"salary\").alias(\"total_salary\"),\n    avg(\"salary\").alias(\"average_salary\")\n)\n\nコードを完成させるには、どの関数を使用すればよいですか？",
        options: [
            "(A) filter",
            "(B) withColumn",
            "(C) agg",
            "(D) select"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：PySparkにおいて、`groupBy` メソッドの後に、合計や平均など「複数の異なる集計関数」を同時に適用して新しい列を生成するためには、`agg()` (aggregate) メソッドを使用する必要があります。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 28:\nサプライチェーン企業のデータエンジニアリングチームは、Lakeflow Declarative Pipelines（旧Delta Live Tables）を使用して在庫データを管理しています。チームは、生データを格納する追記専用の inventory_raw テーブルを持っています。データエンジニアは、この生テーブルから「製品在庫レベルのほぼリアルタイムな変化」を継続的にキャプチャし、最新のステータスを保持する新しいテーブル inventory_latest を作成する任務を負っています。\n\ninventory_latest テーブルを実装するのに最も適したオブジェクトの種類は次のうちどれですか？",
        options: [
            "(A) ストリーミングビュー",
            "(B) マテリアライズドビュー",
            "(C) ストリーミングテーブル (Streaming Table)",
            "(D) 一時ビュー"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：追加専用のソーステーブルから、ほぼリアルタイムで継続的に新しいレコードを読み取り、パイプラインの停止なしにインクリメンタル（増分的）にデータを処理して反映させるための最適なオブジェクトは「ストリーミングテーブル」です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 29:\nLakeflow Jobsにおいて、運用上のオーバーヘッドとアイドル状態のクラスターコストの削減に役立つコンピューティングオプションはどれですか？",
        options: [
            "(A) SQLウェアハウス",
            "(B) サーバーレスジョブコンピューティング (Serverless Job Compute)",
            "(C) 従来のジョブコンピューティング (Classic Job Compute)",
            "(D) 汎用コンピューティング (All-Purpose Compute)"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Databricksの「サーバーレスジョブコンピューティング」を使用すると、クラスターのVMインスタンス管理、スケーリング設定、事前起動待ちといったインフラの運用オーバーヘッドが完全に排除されます。また、ジョブの実行に必要な時間（秒単位）のみ課金され、即座に終了するためアイドルコストが一切発生しません。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 30:\nデータエンジニアが、Databricks上で大きなファクトテーブルと小さなディメンションテーブルを結合するSparkジョブを最適化しています。結合パフォーマンスを向上させるため、Sparkが「最大 100 MB の小さなテーブル」をすべての実行エンジンに自動的に送信するように設定したいと考えています。どのような設定を行うべきでしょうか？",
        options: [
            "(A) spark.conf.set(\"spark.sql.autoBroadcastJoinThreshold\", 104857600)",
            "(B) spark.conf.set(\"spark.executor.memory\", 104857600)",
            "(C) spark.conf.set(\"spark.sql.shuffle.partitions\", 100)",
            "(D) spark.conf.set(\"spark.sql.broadcastTimeout\", 100)"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：ブロードキャストハッシュ結合を自動的に適用するためのテーブルサイズの閾値（バイト単位）を制御するプロパティは `spark.sql.autoBroadcastJoinThreshold` です。100MBは `100 * 1024 * 1024 = 104,857,600` バイトであるため、この値を設定するのが正解です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 31:\n本番環境のS3バケットには、毎日数千もの画像ファイルが様々な形式（.png, .jpg, .gif）で受信されています。データエンジニアは、以下のストリーミング取り込みスクリプトを修正し、.jpgファイルのみが処理されるようにするよう指示されました。\n\ndf = spark.readStream \\\n  .format(\"cloudFiles\") \\\n  .option(\"cloudFiles.format\", \"binaryFile\") \\\n  .option(\"_____________\", \"*.jpg\") \\\n  .load(\"s3://shop/raw/invoices/\")\n\n指定された要件を満たすために、空欄に正しく記入できる選択肢はどれですか？",
        options: [
            "(A) cloudFiles.fileExtension",
            "(B) fileExtension",
            "(C) pathGlobFilter",
            "(D) cloudFiles.pathGlobFilter"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Auto Loader（cloudFiles）において、指定した拡張子やファイル名パターン（ワイルドカード）に一致する入力ファイルだけをフィルタリングして読み込むための正しいオプション名は `pathGlobFilter` です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 32:\n以下の構造化ストリーミングクエリを前提とします。\n\n( spark.readStream\n    .table(\"cleanedOrders\")\n    .groupBy(\"productCategory\")\n    .agg(sum(\"totalWithTax\"))\n  .writeStream\n    .outputMode(\"complete\")\n    .table(\"aggregatedOrders\") )\n\nメダリオンアーキテクチャにおけるこのクエリの目的を最もよく表しているのは、次のうちどれですか？",
        options: [
            "(A) このクエリは、ブロンズテーブルからシルバーテーブルへのホップを実行しています。",
            "(B) このクエリは、シルバーレイヤーからゴールドテーブルへのホップを実行しています。",
            "(C) このクエリは、ゴールドテーブルから本番アプリケーションへのデータ転送を実行します。",
            "(D) このクエリは、生データをブロンズテーブルに取り込んでいます。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：このクエリは、クレンジング済みのデータ（cleanedOrders: シルバー）を元に、カテゴリごとの合計額というビジネスレベルの集計処理（agg(sum(...))）を行い、集約テーブル（aggregatedOrders: ゴールド）に書き込んでいます。これは典型的なシルバーからゴールドへのデータ変換パイプラインです。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 33:\nデータエンジニアは、既存のDeltaテーブル（usersという名前）において、年齢が18歳以上であることを強制的に設定する必要がある。\nどのSQL文がこの制約を正しく追加しますか？",
        options: [
            "(A) ADD CONSTRAINT eligible_adult ON TABLE users CHECK (age > 18)",
            "(B) ALTER TABLE users ALTER COLUMN age SET (age > 18);",
            "(C) ALTER TABLE users ADD CONSTRAINT eligible_adult CHECK (age > 18)",
            "(D) ALTER TABLE users CHECK (age > 18)"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：Delta Lakeでテーブル内の特定の条件（ブール式）を強制するCHECK制約を追加する正しい標準SQL構文は `ALTER TABLE テーブル名 ADD CONSTRAINT 制約名 CHECK (条件)` です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 34:\n次のどの手法を使用すれば、Auto Loader が取り込みの進行状況を追跡し、検出されたファイルのメタデータを保存できますか？",
        options: [
            "(A) Checkpointing (チェックポイント)",
            "(B) COPY INTO",
            "(C) Photon engine",
            "(D) Watermarking (ウォーターマーク)"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：Auto Loaderは、内部のファイル追跡メタデータとストリームのオフセット情報を「チェックポイント (Checkpoint Location)」に保存します。これにより、ジョブが失敗して再起動しても、どこまでファイルを処理したかを正確に記憶しており「厳密に1回（Exactly-Once）」の処理を保証します。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 35:\nDatabricksワークスペースの Web アプリケーションは、以下のどの場所にホストされていますか？",
        options: [
            "(A) Databricksが管理するクラスター",
            "(B) コントロールプレーン (Control Plane)",
            "(C) データプレーン (Data Plane)",
            "(D) 顧客クラウドアカウント"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：DatabricksのWebアプリケーションUI、ワークフロー（ジョブ）スケジューラー、メタストアの管理サービスなどはすべて、Databricks自身がセキュアに管理・ホストする「コントロールプレーン」内に配置されています。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 36:\nデータエンジニアは、Lakeflow Spark Declarative Pipeline（旧Delta Live Tables）で次のクエリを実行します。\n\nCREATE STREAMING TABLE sales_silver\nAS SELECT store_id, total + tax AS total_after_tax FROM sales_bronze\n\nこのクエリにエラーがあるため、パイプラインの起動に失敗しました。DLTパイプラインを正常に起動するために、このクエリに対して以下のどの変更を加えるべきですか？",
        options: [
            "(A) FROM STREAM(LIVE.sales_bronze) を使用する",
            "(B) FROM STREAM(sales_bronze) を使用する",
            "(C) FROM STREAMING(sales_bronze) を使用する",
            "(D) FROM STREAMING sales_bronze を使用する"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：DLTパイプラインにおいて、他のテーブルからデータを「ストリーミング読み取り」としてソース指定する場合、SQL文の FROM 句内で対象テーブルを `STREAM()` 関数でラップする必要があります。これによりシステムは増分処理として認識します。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 37:\nGitフォルダ内で実行できる機能は次のうちどれですか？",
        options: [
            "(A) ブランチを削除する",
            "(B) 新しいリモートGitリポジトリを作成する",
            "(C) プルリクエストを作成する",
            "(D) リモートのGitリポジトリから変更を取り込む (Pull)"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：DatabricksのGitフォルダ内で直接実行できるのは、コミット、プッシュ、新しいブランチの作成、そしてリモートの最新の変更をローカルに反映させるための「Pull（変更の取り込み）」です。PRの作成やブランチの削除はプロバイダー側（GitHub等）で行う必要があります。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 38:\nデータエンジニアリングチームは、以下のコードを使用して、クラウドストレージからJSONログをDeltaテーブルに取り込んでいます。\n\nCOPY INTO target_table\nFROM 'abfss://...'\nFILEFORMAT = JSON\n____________;\n\nソースには古いファイルと新しく更新されたファイルの両方が含まれており、チームは「最終更新日時」でフィルタリングして、最新のファイルのみを読み込みたいと考えています。空欄に正しく記入できる選択肢はどれですか？",
        options: [
            "(A) FORMAT_OPTIONS (file.modification_time > 'ts')",
            "(B) FORMAT_OPTIONS ('modificationTime' > 'ts')",
            "(C) FORMAT_OPTIONS ('modifiedAfter' = 'ts')",
            "(D) FORMAT_OPTIONS (_metadata.file_modification_time > 'ts')"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：`COPY INTO` コマンドで特定の日時以降に変更されたファイルのみをターゲットにするには、`FORMAT_OPTIONS ('modifiedAfter' = 'タイムスタンプ')` という専用のフィルタリングオプションを指定するのが正しい構文です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 39:\nデータエンジニアは、時間の経過とともに新しいフィールドが追加される可能性のあるJSONファイルを取り込むために、Auto Loaderを使用する必要があります。処理中に新しい列が検出された際に、テーブルスキーマが進化するように、オートローダーはどのように構成すればよいでしょうか？",
        options: [
            "(A) オートローダーは、処理中に入力ファイルに新しい列が追加されたことを検出できません。",
            "(B) cloudFiles.schemaLocationを設定し、自動スキーマ進化をサポートするためにcloudFiles.schemaEvolutionMode=addNewColumnsを設定します。",
            "(C) 新しい列とそのデータ型を自動的に検出するには、inferColumnTypesをtrueに設定してください。",
            "(D) 書き込み時に Delta Lake のマージスキーマを有効にするには、mergeSchema を true に設定します。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Auto Loaderでスキーマの自動進化を有効にするには、スキーマの履歴を追跡・保存するディレクトリである `cloudFiles.schemaLocation` を必ず指定した上で、新しい列を追加する動作モード `schemaEvolutionMode = \"addNewColumns\"` を設定する必要があります。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 40:\nデータエンジニアが、sales_job というキーを持つジョブリソースを含むバンドルをデプロイし、それをターゲットワークスペースで実行したいと考えています。データエンジニアは、この目的を達成するためにどの Databricks CLI コマンドを使用できますか？",
        options: [
            "(A) databricks bundle trigger sales_job",
            "(B) databricks bundle deploy --run sales_job",
            "(C) databricks bundle execute sales_job",
            "(D) databricks bundle run sales_job"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Databricks Asset Bundlesで構成ファイルをデプロイした後、そのバンドル内で定義された特定のジョブやパイプラインを手動でトリガーして実行させるコマンドは `databricks bundle run <リソースキー>` です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 41:\nデータエンジニアがDatabricks SQLパイプラインで受信トランザクションデータを検証しています。一部のレコードの数値フィールドに予期しない記号が含まれています。エンジニアは次のクエリを実行します。\n\nSELECT COALESCE(TRY_CAST(\"100$\" AS INT), 0)\n\nこのクエリの結果を最も適切に表しているのは、次のうちどれですか？",
        options: [
            "(A) NULL",
            "(B) 0",
            "(C) 100",
            "(D) エラーが発生しました"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：`TRY_CAST(\"100$\" AS INT)` は無効な文字が含まれているため、エラーを出さずに安全に `NULL` を返します。外側にある `COALESCE` 関数は、NULLを受け取ると次の引数である `0` をフォールバック値として返すため、最終結果は `0` になります。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 42:\nデータエンジニアが、本番環境でコマンドを使用して外部のDeltaテーブルを管理対象テーブルに変換します。ALTER TABLE ... SET MANAGED。変換が完了すると、ストリーミングクエリが次のエラーで新しいデータを受信しなくなります。\n\n「DELTA_STREAMING_INTERRUPTED_BY_MANAGED_TABLE_CONVERSION: テーブルが Unity カタログ管理テーブルに変換されました。データの一貫性を確保するため、ストリームは停止されました。」\n\nデータエンジニアはこの問題をどのように解決すべきでしょうか？",
        options: [
            "(A) ストリームを再起動すると、変換されたテーブルを使用して、最後にコミットされたオフセットから自動的に再開されます。",
            "(B) 変換後のテーブルに対してコマンドを実行しVACUUM、古いファイルを削除してストリーミング状態を復元します。",
            "(C) REPAIR TABLE コマンドを実行してチェックポイントのオフセットを更新します。",
            "(D) UNSET MANAGED を実行して外部テーブルにロールバックします。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：外部から管理対象テーブルへの移動中、Databricksはデータ破壊を防ぐためアクティブなストリームを意図的に停止させます。メタデータの移行完了後にストリームを同じ設定で再起動するだけで、システムは自動的に新しいパスを認識し、チェックポイント情報から安全に処理を再開します。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 43:\n以下の空欄を埋めて、配列列 students から「3つ未満のコースに登録している学生」のみを残した配列を取得してください。\n\nSELECT faculty_id, students, ___________ AS few_courses_students FROM faculties",
        options: [
            "(A) TRANSFORM (students, i -> i.total_courses < 3)",
            "(B) TRANSFORM (students, total_courses < 3)",
            "(C) FILTER (students, i -> i.total_courses < 3)",
            "(D) FILTER (students, total_courses < 3)"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：配列（ARRAY）の中から特定の条件（ラムダ関数）に一致する要素だけを抽出して新しい配列を生成するSparkの組み込み高階関数は `FILTER` です。`TRANSFORM` は配列の全要素に対して計算を行い、要素の値を変更する際に使用します。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 44:\n以下のSQLコマンドのうち、この新しい行を既存のDeltaテーブル users に追加するものはどれですか？\n\n|user_id | name | age |\n|--------|------|-----|\n|0015    | Adam | 23  |",
        options: [
            "(A) INSERT VALUES (“0015”, “Adam”, 23) INTO users",
            "(B) INSERT INTO users VALUES (“0015”, “Adam”, 23)",
            "(C) APPEND VALUES (“0015”, “Adam”, 23) INTO users",
            "(D) APPEND INTO users VALUES (“0015”, “Adam”, 23)"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：既存のテーブルに新しい単一のレコード（行）を明示的に挿入するための正しい標準SQL構文は `INSERT INTO テーブル名 VALUES (値1, 値2...)` です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 45:\nデータエンジニアは、スケジュールされたPythonノートブックを1時間ごとに実行する必要があります。この作業では、比較的少量のデータを処理します。実行環境は効率的で、クラスタの事前ウォームアップを必要とせず、一貫性のある信頼性の高いパフォーマンスを提供する必要があります。\nこれらの要件を考慮すると、このジョブを実行するために推奨されるコンピューティングオプションはどれですか？",
        options: [
            "(A) サーバーレスジョブコンピューティング",
            "(B) クラシックジョブクラスター (Classic Job Compute)",
            "(C) サーバーレスSQLウェアハウス",
            "(D) 汎用クラスター (All-Purpose Compute)"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：事前起動（ウォームアップ）の待ち時間がなく即座にリソースが割り当てられ、効率的にスクリプトを実行してすぐに終了する環境が必要な場合、インフラストラクチャが完全に抽象化・管理された「サーバーレスジョブコンピューティング」が最適です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 46:\nデータエンジニアリングチームは、Unity Catalog の employees テーブルに行フィルタリングを適用して、人事チーム (hr_team) のメンバーのみがすべてのレコードにアクセスできるようにし、他のメンバーにはフランス (FR) リージョンのレコードのみが表示されるようにしたいと考えています。これを実現するために、彼らは次のユーザー定義関数を実装しました。\n\nCREATE FUNCTION fr_filter(region STRING) RETURN IF(IS_ACCOUNT_GROUP_MEMBER('hr_team'), true, region = 'FR');\n\nこの機能をテーブルの行フィルターとして適用するために使用できるコマンドは次のうちどれですか？",
        options: [
            "(A) ALTER TABLE employees SET ROW FILTER fr_filter ON (region);",
            "(B) ALTER TABLE employees SET ROW FILTER fr_filter;",
            "(C) SET ROW FILTER fr_filter ON TABLE employees TO COLUMN region",
            "(D) ALTER TABLE employees ALTER COLUMN region SET ROW FILTER fr_filter;"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：作成した関数をテーブル全体の行アクセスを制御する行フィルター（ROW FILTER）としてアタッチする正しい構文は `ALTER TABLE <テーブル名> SET ROW FILTER <関数名> ON (<入力列のリスト>)` です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 47:\nデータエンジニアは、カタログエクスプローラーを使用して権限を以下のように管理します。\n\n1. カタログ「販売」に対して USE CATALOG を小売アナリストに付与\n2. スキーマ「トランザクション」に対して USE SCHEMA を小売アナリストに付与\n3. テーブル「daily_revenue」に対して SELECT を小売アナリストに付与\n\nこれらの行動の結果を正しく説明しているのは、次のうちどれですか？",
        options: [
            "(A) 小売アナリストグループは daily_revenue からデータを読み取ることができますが、販売カタログまたはトランザクションスキーマ内のオブジェクトを作成、変更、または削除することはできません。",
            "(B) USE SCHEMA によってスキーマ内のすべてのテーブルに対する SELECT 権限が自動的に付与されるため、小売アナリストグループはトランザクションスキーマ内のすべてのテーブルに対してクエリを実行できるようになります。",
            "(C) 小売アナリストグループは、USE CATALOGとUSE SCHEMAの両方の権限が付与されているため、トランザクションスキーマに新しいテーブルを作成できるようになります。",
            "(D) 権限は、データエンジニアがSQLエディターで生成されたGRANTコマンドを手動で実行するまで有効になりません。"
        ],
        answerIndex: 0,
        explanation: "解答：(A)\n\n解説：上位コンテナの `USE` 権限と、対象テーブルの `SELECT` 権限のみが与えられているため、対象テーブルからのデータ読み取りは可能ですが、新しいテーブルの作成（CREATE TABLE）やデータの変更（MODIFY）などの書き込み権限は一切付与されていません。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 48:\nデータエンジニアが、PostgreSQLデータベースからデータを取り込むためのLakeflow Spark Declarative Pipeline（SDP）を構築しており、ほぼリアルタイムの分析のために「ストリーミングテーブル」を使用したいと考えています。エンジニアは、ストリーミングテーブルを使用すれば、JDBCソースからの継続的なデータ取り込みが直接可能になると考えています。\nこの仮定に関して、正しい記述はどれですか？",
        options: [
            "(A) PostgreSQLは、ストリーミングテーブルでKafkaのように直接利用できます。",
            "(B) PostgreSQLへのデータ取り込みは、バッチJDBC経由でのみサポートされており、ネイティブストリーミングはサポートされていません。",
            "(C) SDPでは、JDBCソースは自動的にストリーミングソースとして扱われます。",
            "(D) ストリーミングテーブルは、PostgreSQLからのJDBCによる継続的なデータ取り込みをサポートします。"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：標準的なSparkのJDBCコネクタは静的なテーブルのバッチ読み取り（スナップショット）としてのみ機能し、Kafkaのように未処理の差分ログを継続的にサブスクライブするストリーミングソースとして直接扱うことはできません。（リアルタイム同期にはLakeflow ConnectのCDC機能などが必要です）"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 49:\nデータエンジニアリングチームは、上流のデータ取り込みパイプラインによってデルタテーブルが更新されるたびに自動的に更新されるレポートジョブを管理しています。その目的は、テーブルの変更に対応し、新しいデータが到着した際に下流のレポートが常に一貫性を保ち、最新の状態に維持されるようにすることです。\nこの作業には、チームはどのようなトリガー設定を使用すべきでしょうか？",
        options: [
            "(A) ファイル到着トリガー",
            "(B) スケジュールされたトリガー",
            "(C) テーブル更新トリガー (Table Update Trigger)",
            "(D) 連続トリガー"
        ],
        answerIndex: 2,
        explanation: "解答：(C)\n\n解説：特定のDeltaテーブル（上流）に新しいデータの追加や更新（INSERT, UPDATEなど）が発生したことを検知し、それをイベントとして即座に下流のレポートジョブを自動実行させるには「テーブル更新トリガー」が最適です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 50:\nデータエンジニアが、ALTER TABLE ... SET MANAGED コマンドを使用して外部テーブルを管理対象テーブルに変換しました。\nこの変換において SET MANAGED を用いる主な利点は何ですか？（2つ選択してください）",
        options: [
            "(A) 変換された管理対象テーブルを外部テーブルにロールバックすることをサポートします。",
            "(B) 変換後、ストレージコストを節約するために、元の外部ストレージの場所を即座に削除します。",
            "(C) パスベースの読み書きをリダイレクトすることで、変換後も既存コードが機能するようにします。",
            "(D) 変換後も、読み取りと書き込みの両方において、元の外部ロケーションを唯一の真の情報源として引き続き使用します。",
            "(E) 管理対象ロケーションと外部ロケーションの両方を並行して同期し、変換後の二重書き込みの一貫性をサポートします。"
        ],
        answerIndex: [0, 2],
        explanation: "解答：(A), (C)\n\n解説：`SET MANAGED` でテーブルを管理状態に変換する大きなメリットは2点あります。1つ目は、問題があれば `UNSET MANAGED` で安全に元の外部テーブル状態に「ロールバック」できること。2つ目は、過去の外部パスを参照している既存のコードからの読み書きをシステムが自動的に新しい管理対象パスへ「リダイレクト」し、コードの修正なく稼働を継続できることです。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 51:\n財務データアナリストは、Unity Catalog スキーマ enterprise.reporting 内の既存および将来のすべてのテーブルへの読み取り専用アクセスを必要とします。アクセスはこのスキーマのみに限定され、エンタープライズカタログ内の他のスキーマには権限が付与されてはなりません。\nどのSQLコマンドを使えば、このアクセス権を正しく付与できますか？",
        options: [
            "(A) GRANT BROWSE ON SCHEMA enterprise.reporting TO finance-analyst;\nGRANT USE SCHEMA ON SCHEMA enterprise.reporting TO finance-analyst;\nGRANT USE CATALOG ON CATALOG enterprise TO finance-analyst;",
            "(B) GRANT SELECT ON CATALOG enterprise TO finance-analyst;\nGRANT USE SCHEMA ON CATALOG enterprise TO finance-analyst;\nGRANT USE CATALOG ON CATALOG enterprise TO finance-analyst;",
            "(C) GRANT USE SCHEMA ON SCHEMA enterprise.reporting TO finance-analyst;\nGRANT USE CATALOG ON CATALOG enterprise TO finance-analyst;",
            "(D) GRANT SELECT ON SCHEMA enterprise.reporting TO finance-analyst;\nGRANT USE SCHEMA ON SCHEMA enterprise.reporting TO finance-analyst;\nGRANT USE CATALOG ON CATALOG enterprise TO finance-analyst;"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：特定のスキーマ内の「既存および将来作成されるすべてのテーブル」への読み取り権限を一括で付与するには、スキーマレベルに対して直接 `GRANT SELECT` を実行します。併せて親コンテナを通過するための `USE SCHEMA` と `USE CATALOG` も付与する構成が正解です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 52:\nデータエンジニアリングチームが、Databricks SQLで再利用可能な製品フィルタリングクエリを作成しています。このクエリは、SQLロジックを変更することなく異なる値を渡すことができるように、「pid」という名前付きパラメータを使用して、product_idの実行時入力値を受け入れる必要があります。\n名前付きパラメータを正しく定義および使用するクエリはどれですか？",
        options: [
            "(A) SELECT * FROM products WHERE product_id = ${var.pid};",
            "(B) SELECT * FROM products WHERE product_id = $pid;",
            "(C) SELECT * FROM products WHERE product_id = pid;",
            "(D) SELECT * FROM products WHERE product_id = :pid;"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：Databricks SQLにおいて、ダッシュボードやクエリエディタで動的に値を注入できる「名前付きパラメータ（Named Parameter）」の正しい構文は、変数名の先頭にコロン（`:`）を付ける `:pid` の形式です。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 53:\n「統制タグ (Tag) を使用して行フィルタと列マスクを動的に適用するメカニズム。単一のカタログレベルの定義により、テーブルごとの設定なしに、現在および将来のすべてのテーブルに自動的に適用されます。」\n上記の記述で説明されているUnityカタログの機能は次のうちどれですか？",
        options: [
            "(A) 予測最適化",
            "(B) Liquid Clustering (リキッドクラスタリング)",
            "(C) 動的なビュー",
            "(D) 属性ベースアクセス制御 (ABAC) ポリシー"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：特定のタグ（例：pii=true）が付与された列やテーブルに対して、自動的かつ大規模に行フィルタや列マスクを伝播・適用させる高度なセキュリティ管理モデルを「属性ベースアクセス制御（ABAC）」と呼びます。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 54:\nデータエンジニアは、 db_hrという名前のカスタムロケーションスキーマを持っており、このスキーマが基盤となるストレージのどこ（ファイルパス）に作成されたのかを知りたいと考えています。\nデータエンジニアがこのタスクを完了するために使用できるコマンドは次のうちどれですか？",
        options: [
            "(A) DESCRIBE EXTENDED db_hr",
            "(B) DESCRIBE db_hr",
            "(C) SELECT location FROM db_hr.db",
            "(D) DESCRIBE DATABASE db_hr"
        ],
        answerIndex: 3,
        explanation: "解答：(D)\n\n解説：スキーマ（データベース）に関連付けられた物理的なストレージロケーション（URI）などのメタデータを表示するには `DESCRIBE DATABASE スキーマ名` (または `DESCRIBE SCHEMA スキーマ名`) を使用します。"
    },
    {
        course: "exam4",
        category: "模擬試験",
        question: "問題 55:\nDatabricks SQLで利用できるコンピューティングリソースは次のうちどれですか？",
        options: [
            "(A) マルチノードクラスタ",
            "(B) SQLウェアハウス",
            "(C) シングルノードクラスタ",
            "(D) SQLエンジン"
        ],
        answerIndex: 1,
        explanation: "解答：(B)\n\n解説：Databricks SQL環境内で、クエリの実行やダッシュボードの更新に割り当てられる専用の最適化されたコンピューティングリソースは「SQLウェアハウス (SQL Warehouse)」と呼ばれます。"
    }
];
