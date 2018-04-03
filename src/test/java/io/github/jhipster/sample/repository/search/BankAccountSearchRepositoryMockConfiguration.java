package io.github.jhipster.sample.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of BankAccountSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class BankAccountSearchRepositoryMockConfiguration {

    @MockBean
    private BankAccountSearchRepository mockBankAccountSearchRepository;

}
