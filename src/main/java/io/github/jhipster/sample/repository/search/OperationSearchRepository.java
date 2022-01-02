package io.github.jhipster.sample.repository.search;

import static org.elasticsearch.index.query.QueryBuilders.queryStringQuery;

import io.github.jhipster.sample.domain.Operation;
import java.util.List;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.elasticsearch.search.sort.FieldSortBuilder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Operation} entity.
 */
public interface OperationSearchRepository extends ElasticsearchRepository<Operation, Long>, OperationSearchRepositoryInternal {}

interface OperationSearchRepositoryInternal {
    Page<Operation> search(String query, Pageable pageable);
}

class OperationSearchRepositoryInternalImpl implements OperationSearchRepositoryInternal {

    private final ElasticsearchRestTemplate elasticsearchTemplate;

    OperationSearchRepositoryInternalImpl(ElasticsearchRestTemplate elasticsearchTemplate) {
        this.elasticsearchTemplate = elasticsearchTemplate;
    }

    @Override
    public Page<Operation> search(String query, Pageable pageable) {
        NativeSearchQuery nativeSearchQuery = new NativeSearchQuery(queryStringQuery(query));
        nativeSearchQuery.setPageable(pageable);
        List<Operation> hits = elasticsearchTemplate
            .search(nativeSearchQuery, Operation.class)
            .map(SearchHit::getContent)
            .stream()
            .collect(Collectors.toList());

        return new PageImpl<>(hits, pageable, hits.size());
    }
}
