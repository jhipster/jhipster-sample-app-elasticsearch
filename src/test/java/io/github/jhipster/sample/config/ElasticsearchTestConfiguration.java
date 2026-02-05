package io.github.jhipster.sample.config;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.data.elasticsearch.client.elc.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.core.RefreshPolicy;

@TestConfiguration(proxyBeanMethods = false)
public class ElasticsearchTestConfiguration {

    @Autowired
    ElasticsearchTemplate template;

    @PostConstruct
    public void configureTemplate() {
        this.template.setRefreshPolicy(RefreshPolicy.IMMEDIATE);
    }
}
