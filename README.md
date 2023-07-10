
# RabbitMQ Helm Chart

A Helm Chart to run RabbitMQ in your cluster



## Authors

- [@jxtsamfrimpong](https://github.com/jxtSamFrimpong)
Run a message broker in your cluster with full control

## Acknowledgements

 - [How to deploy a high available and fault tolerant RabbitMQ service in a Kubernetes multi-node cluster environment](https://medium.com/@paolo.gazzola/deploy-a-rabbitmq-cluster-in-an-on-premise-kubernetes-multi-node-cluster-enviroment-5dd71d84dafc)
 - [RabbitMQ Cluster Kubernetes Operator Quickstart](https://www.rabbitmq.com/kubernetes/operator/quickstart-operator.html)
 - [RabbitMQ Cluster Operator API_Reference_v1.2.0](https://github.com/rabbitmq/cluster-operator/wiki/API_Reference_v1.2.0)

 





## Run

To deploy application

first install the CustomResourceDefinitions(CRDs) using the command below

```bash
kubectl apply -f kubectl apply -f "https://github.com/rabbitmq/cluster-operator/releases/latest/download/cluster-operator.yml"
```

Or alternatively, you can instll the CRDs by setting install CRDs to true using the helm install flag as below 
```bash
helm install rabbitmq ./rabbitmq --set installCRDs=true
```





## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.




## Environment Variables

check the https://github.com/rabbitmq/cluster-operator/tree/main and the rabbitmq page for env Variables and config files to be used



## Features

Monitoring

follow instructions on https://www.rabbitmq.com/monitoring.html to setup monitoring for your cluster

port-forward the application monitoring port 15692 to test the /metrics endpoint 




## FAQ

#### Issues

you're welcome to create an issue, also you can fork the repo and submit a PR after solving an issue if its taking too long








## 🚀 About Me
I'm a DevOps Engineer at Develeap developer...


## License

[MPL](https://www.logo.wine/a/logo/Mozilla_Public_License/Mozilla_Public_License-Logo.wine.svg)

