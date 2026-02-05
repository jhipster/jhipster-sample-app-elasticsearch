package io.github.jhipster.sample;

import io.github.jhipster.sample.config.AsyncSyncConfiguration;
import io.github.jhipster.sample.config.ElasticsearchTestConfiguration;
import io.github.jhipster.sample.config.ElasticsearchTestContainer;
import io.github.jhipster.sample.config.EmbeddedSQL;
import io.github.jhipster.sample.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.testcontainers.context.ImportTestcontainers;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(
    classes = {
        JhipsterElasticsearchSampleApplicationApp.class,
        JacksonConfiguration.class,
        AsyncSyncConfiguration.class,
        io.github.jhipster.sample.config.JacksonHibernateConfiguration.class,
        ElasticsearchTestConfiguration.class,
    }
)
@EmbeddedSQL
@ImportTestcontainers(ElasticsearchTestContainer.class)
public @interface IntegrationTest {}
