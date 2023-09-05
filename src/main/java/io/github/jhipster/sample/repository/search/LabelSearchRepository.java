package io.github.jhipster.sample.repository.search;

import co.elastic.clients.elasticsearch._types.query_dsl.QueryStringQuery;
import io.github.jhipster.sample.domain.Label;
import io.github.jhipster.sample.repository.LabelRepository;
import java.util.stream.Stream;
import org.springframework.data.elasticsearch.client.elc.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.client.elc.NativeQuery;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.scheduling.annotation.Async;

/**
 * Spring Data Elasticsearch repository for the {@link Label} entity.
 */
public interface LabelSearchRepository extends ElasticsearchRepository<Label, Long>, LabelSearchRepositoryInternal {}

interface LabelSearchRepositoryInternal {
    Stream<Label> search(String query);

    Stream<Label> search(Query query);

    @Async
    void index(Label entity);

    @Async
    void deleteFromIndexById(Long id);
}

class LabelSearchRepositoryInternalImpl implements LabelSearchRepositoryInternal {

    private final ElasticsearchTemplate elasticsearchTemplate;
    private final LabelRepository repository;

    LabelSearchRepositoryInternalImpl(ElasticsearchTemplate elasticsearchTemplate, LabelRepository repository) {
        this.elasticsearchTemplate = elasticsearchTemplate;
        this.repository = repository;
    }

    @Override
    public Stream<Label> search(String query) {
        NativeQuery nativeQuery = new NativeQuery(QueryStringQuery.of(qs -> qs.query(query))._toQuery());
        return search(nativeQuery);
    }

    @Override
    public Stream<Label> search(Query query) {
        return elasticsearchTemplate.search(query, Label.class).map(SearchHit::getContent).stream();
    }

    @Override
    public void index(Label entity) {
        repository.findById(entity.getId()).ifPresent(elasticsearchTemplate::save);
    }

    @Override
    public void deleteFromIndexById(Long id) {
        elasticsearchTemplate.delete(String.valueOf(id), Label.class);
    }
}
