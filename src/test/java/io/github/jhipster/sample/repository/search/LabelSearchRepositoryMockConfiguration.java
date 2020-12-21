package io.github.jhipster.sample.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of {@link LabelSearchRepository} to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class LabelSearchRepositoryMockConfiguration {

    @MockBean
    private LabelSearchRepository mockLabelSearchRepository;
}
