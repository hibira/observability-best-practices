# ECS ワークロードのモニタリング
<!--ADOT、AWS X-Ray、Amazon Managed Service for Prometheus を使用-->

## はじめに

コンテナ化されたアプリケーションの世界では、効果的な監視が信頼性とパフォーマンスを維持するために不可欠です。このドキュメントでは、AWS Distro for OpenTelemetry (ADOT)、AWS X-Ray、Amazon Managed Service for Prometheus を活用した、Amazon Elastic Container Service (ECS) ワークロードの高度な監視ソリューションについて説明します。

## アーキテクチャの概要

このモニタリングアーキテクチャの中心は、アプリケーションと ADOT コレクターの両方をホストする ECS タスクです。このセットアップにより、アプリケーション環境から包括的なデータ収集が可能になります。

![ECS AMP](./images/ecs.png)
*図 1: ECS から AMP と X-Ray へメトリクスを送信*

## 主要コンポーネント

### ECS タスク
ECS タスクは、アプリケーションとモニタリングコンポーネントをカプセル化する基本的な単位として機能します。

### サンプルアプリケーション
コンテナ化されたアプリケーションは、監視対象のワークロードを表す ECS タスク内で実行されます。

### AWS Distro for OpenTelemetry (ADOT) コレクター
ADOT コレクターは、アプリケーションと併せてデプロイされ、テレメトリデータの集約ポイントとして機能します。アプリケーションからメトリクスとトレースの両方を収集します。

### AWS X-Ray
X-Ray は ADOT コレクターからトレースデータを受け取り、リクエストフローとサービス依存関係の詳細な洞察を提供します。

### Amazon Managed Service for Prometheus
このサービスは、ADOT コレクターによって収集されたメトリクスを保存および管理し、メトリクスの保存とクエリ実行のためのスケーラブルなソリューションを提供します。

## データフロー

1. サンプルアプリケーションは稼働中に Telemetry データを生成します。
2. 同じ ECS タスク内で実行されている ADOT コレクターがこのデータをアプリケーションから収集します。
3. トレースデータは分散トレーシング分析のために AWS X-Ray に転送されます。
4. メトリクスは Amazon Managed Service for Prometheus に送られ、保存され後の分析に使用されます。

## 利点

- **包括的なモニタリング**: メトリクスとトレースの両方を取得し、アプリケーションのパフォーマンスを包括的に把握できます。
- **スケーラビリティ**: マネージドサービスを活用して大量のテレメトリデータを処理できます。
- **統合性**: ECS やその他の AWS サービスとシームレスに連携します。
- **運用オーバーヘッドの削減**: マネージドサービスを利用することで、インフラストラクチャの管理が最小限に抑えられます。

## 実装時の考慮事項

- ECS タスクから X-Ray と Prometheus へのデータ送信を許可するため、適切な IAM ロールとアクセス許可を設定する必要があります。
- ECS タスクのリソース割り当ては、アプリケーションと ADOT コレクターの両方を考慮する必要があります。
- メトリクスとトレースに加えてログ収集を実装し、完全なオブザーバビリティソリューションを構築することを検討してください。

## 結論

この設計は、OpenTelemetry と AWS 管理サービスの力を組み合わせることで、ECS ワークロードに対する堅牢なモニタリングソリューションを提供します。アプリケーションのパフォーマンスと動作に関する深い洞察を可能にし、コンテナ化された環境における迅速な問題解決と適切な意思決定を促進します。