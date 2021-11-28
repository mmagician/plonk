initSidebarItems({"fn":[["fmt","Returns a new `SubscriberBuilder` for configuring a formatting subscriber."],["format","Returns the default configuration for an [event formatter]."],["init","Install a global tracing subscriber that listens for events and filters based on the value of the `RUST_LOG` environment variable."],["layer","Returns a new formatting layer that can be composed with other layers to construct a [`Subscriber`]."],["time","Returns a new `SystemTime` timestamp provider."],["try_init","Install a global tracing subscriber that listens for events and filters based on the value of the `RUST_LOG` environment variable, if one is not already set."]],"mod":[["format","Formatters for logging `tracing` events."],["time","Formatters for event timestamps."],["writer","Abstractions for creating `io::Write` instances."]],"struct":[["FmtContext","Provides the current span context to a formatter."],["FormattedFields","A formatted representation of a span’s fields stored in its extensions."],["Layer","A `Layer` that logs formatted representations of `tracing` events."],["Subscriber","A `Subscriber` that logs formatted representations of `tracing` events."],["SubscriberBuilder","Configures and constructs `Subscriber`s."],["TestWriter","A writer intended to support `libtest`’s output capturing for use in unit tests."]],"trait":[["FormatEvent","A type that can format a tracing `Event` for a `fmt::Write`."],["FormatFields","A type that can format a set of fields to a `fmt::Write`."],["MakeWriter","A type that can create `io::Write` instances."]],"type":[["Formatter","A `Subscriber` that logs formatted representations of `tracing` events. This type only logs formatted events; it does not perform any filtering."],["LayerBuilder","A builder for `Layer` that logs formatted representations of `tracing` events and spans."]]});