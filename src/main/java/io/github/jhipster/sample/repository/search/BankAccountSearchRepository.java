package io.github.jhipster.sample.repository.search;

import static org.springframework.data.elasticsearch.client.elc.QueryBuilders.queryStringQuery;

import co.elastic.clients.elasticsearch._types.query_dsl.QueryStringQuery;
import io.github.jhipster.sample.domain.BankAccount;
import io.github.jhipster.sample.repository.BankAccountRepository;
import java.util.stream.Stream;
import org.springframework.data.elasticsearch.client.elc.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.client.elc.NativeQuery;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Spring Data Elasticsearch repository for the {@link BankAccount} entity.
 */
public interface BankAccountSearchRepository extends ElasticsearchRepository<BankAccount, Long>, BankAccountSearchRepositoryInternal {}

interface BankAccountSearchRepositoryInternal {
    Stream<BankAccount> search(String query);

    Stream<BankAccount> search(Query query);

    @Async
    void index(BankAccount entity);

    @Async
    void deleteFromIndexById(Long id);
}

class BankAccountSearchRepositoryInternalImpl implements BankAccountSearchRepositoryInternal {

    private final ElasticsearchTemplate elasticsearchTemplate;
    private final BankAccountRepository repository;

    BankAccountSearchRepositoryInternalImpl(ElasticsearchTemplate elasticsearchTemplate, BankAccountRepository repository) {
        this.elasticsearchTemplate = elasticsearchTemplate;
        this.repository = repository;
    }

    @Override
    public Stream<BankAccount> search(String query) {
        NativeQuery nativeQuery = new NativeQuery(QueryStringQuery.of(qs -> qs.query(query))._toQuery());
        return search(nativeQuery);
    }

    @Override
    public Stream<BankAccount> search(Query query) {
        return elasticsearchTemplate.search(query, BankAccount.class).map(SearchHit::getContent).stream();
    }

    @Override
    public void index(BankAccount entity) {
        repository.findOneWithEagerRelationships(entity.getId()).ifPresent(elasticsearchTemplate::save);
    }

    @Override
    public void deleteFromIndexById(Long id) {
        elasticsearchTemplate.delete(String.valueOf(id), BankAccount.class);
    }
}
