package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.BankAccount;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the BankAccount entity.
 */
public interface BankAccountSearchRepository extends ElasticsearchRepository<BankAccount, Long> {
}
