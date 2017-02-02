package io.github.jhipster.sample.repository.search;

import io.github.jhipster.sample.domain.BankAccount;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the BankAccount entity.
 */
public interface BankAccountSearchRepository extends ElasticsearchRepository<BankAccount, Long> {
}
