package io.github.jhipster.sample.config;

import org.slf4j.LoggerFactory;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.output.Slf4jLogConsumer;
import org.testcontainers.elasticsearch.ElasticsearchContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.utility.DockerImageName;

public interface ElasticsearchTestContainer {
    @Container
    ElasticsearchContainer elasticsearchContainer = new ElasticsearchContainer(
        DockerImageName.parse("docker.elastic.co/elasticsearch/elasticsearch").withTag("9.2.8")
    )
        .withLogConsumer(new Slf4jLogConsumer(LoggerFactory.getLogger(ElasticsearchTestContainer.class)))
        .withEnv("xpack.security.enabled", "false")
        .withReuse(true);

    @DynamicPropertySource
    static void registerProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.elasticsearch.uris", () -> "http://" + elasticsearchContainer.getHttpHostAddress());
    }
}
