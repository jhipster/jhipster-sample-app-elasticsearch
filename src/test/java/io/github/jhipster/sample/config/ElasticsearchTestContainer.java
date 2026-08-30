package io.github.jhipster.sample.config;

import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.context.annotation.Bean;
import org.testcontainers.containers.output.Slf4jLogConsumer;
import org.testcontainers.elasticsearch.ElasticsearchContainer;
import org.testcontainers.utility.DockerImageName;

@TestConfiguration(proxyBeanMethods = false)
public class ElasticsearchTestContainer {

    private static final ElasticsearchContainer ELASTICSEARCH_CONTAINER = new ElasticsearchContainer(
        DockerImageName.parse("docker.elastic.co/elasticsearch/elasticsearch").withTag("9.4.5")
    )
        .withLogConsumer(new Slf4jLogConsumer(LoggerFactory.getLogger(ElasticsearchTestContainer.class)))
        .withEnv("xpack.security.enabled", "false")
        .withReuse(true);

    @Bean
    @ServiceConnection
    ElasticsearchContainer elasticsearchContainer() {
        return ELASTICSEARCH_CONTAINER;
    }
}
