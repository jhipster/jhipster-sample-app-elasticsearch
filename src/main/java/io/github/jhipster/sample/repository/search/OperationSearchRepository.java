package io.github.jhipster.sample.repository.search;

import static org.elasticsearch.index.query.QueryBuilders.queryStringQuery;

import io.github.jhipster.sample.domain.Operation;
import io.github.jhipster.sample.repository.OperationRepository;
import java.util.List;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.elasticsearch.search.sort.SortBuilder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Spring Data Elasticsearch repository for the {@link Operation} entity.
 */
public interface OperationSearchRepository extends ElasticsearchRepository<Operation, Long>, OperationSearchRepositoryInternal {}

interface OperationSearchRepositoryInternal {
    Page<Operation> search(String query, Pageable pageable);

    Page<Operation> search(Query query);

    void index(Operation entity);
}

class OperationSearchRepositoryInternalImpl implements OperationSearchRepositoryInternal {

    private final ElasticsearchRestTemplate elasticsearchTemplate;
    private final OperationRepository repository;

    OperationSearchRepositoryInternalImpl(ElasticsearchRestTemplate elasticsearchTemplate, OperationRepository repository) {
        this.elasticsearchTemplate = elasticsearchTemplate;
        this.repository = repository;
    }

    @Override
    public Page<Operation> search(String query, Pageable pageable) {
        NativeSearchQuery nativeSearchQuery = new NativeSearchQuery(queryStringQuery(query));
        return search(nativeSearchQuery.setPageable(pageable));
    }

    @Override
    public Page<Operation> search(Query query) {
        SearchHits<Operation> searchHits = elasticsearchTemplate.search(query, Operation.class);
        List<Operation> hits = searchHits.map(SearchHit::getContent).stream().collect(Collectors.toList());
        return new PageImpl<>(hits, query.getPageable(), searchHits.getTotalHits());
    }

    @Override
    public void index(Operation entity) {
        repository.findOneWithEagerRelationships(entity.getId()).ifPresent(elasticsearchTemplate::save);
    }
}
