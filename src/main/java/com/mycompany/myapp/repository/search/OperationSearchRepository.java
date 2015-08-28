package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.Operation;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Operation entity.
 */
public interface OperationSearchRepository extends ElasticsearchRepository<Operation, Long> {
}
