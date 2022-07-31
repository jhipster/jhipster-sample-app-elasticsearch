package io.github.jhipster.sample.repository.search;

import static org.elasticsearch.index.query.QueryBuilders.queryStringQuery;

import io.github.jhipster.sample.domain.Label;
import io.github.jhipster.sample.repository.LabelRepository;
import java.util.stream.Stream;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Spring Data Elasticsearch repository for the {@link Label} entity.
 */
public interface LabelSearchRepository extends ElasticsearchRepository<Label, Long>, LabelSearchRepositoryInternal {}

interface LabelSearchRepositoryInternal {
    Stream<Label> search(String query);

    Stream<Label> search(Query query);

    void index(Label entity);
}

class LabelSearchRepositoryInternalImpl implements LabelSearchRepositoryInternal {

    private final ElasticsearchRestTemplate elasticsearchTemplate;
    private final LabelRepository repository;

    LabelSearchRepositoryInternalImpl(ElasticsearchRestTemplate elasticsearchTemplate, LabelRepository repository) {
        this.elasticsearchTemplate = elasticsearchTemplate;
        this.repository = repository;
    }

    @Override
    public Stream<Label> search(String query) {
        NativeSearchQuery nativeSearchQuery = new NativeSearchQuery(queryStringQuery(query));
        return search(nativeSearchQuery);
    }

    @Override
    public Stream<Label> search(Query query) {
        return elasticsearchTemplate.search(query, Label.class).map(SearchHit::getContent).stream();
    }

    @Override
    public void index(Label entity) {
        repository.findById(entity.getId()).ifPresent(elasticsearchTemplate::save);
    }
}
