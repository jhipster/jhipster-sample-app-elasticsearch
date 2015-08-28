package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.Label;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Label entity.
 */
public interface LabelSearchRepository extends ElasticsearchRepository<Label, Long> {
}
