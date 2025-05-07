package store

type Store struct{}

func Init() *Store {
	return &Store{}
}

func (s *Store) Set(key string, value interface{}) {

}
