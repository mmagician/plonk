(function() {var implementors = {};
implementors["frame_support"] = [{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/debug/struct.RuntimeLogger.html\" title=\"struct frame_support::debug::RuntimeLogger\">RuntimeLogger</a>","synthetic":true,"types":["frame_support::debug::RuntimeLogger"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"frame_support/storage/child/enum.KillOutcome.html\" title=\"enum frame_support::storage::child::KillOutcome\">KillOutcome</a>","synthetic":true,"types":["frame_support::storage::child::KillOutcome"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/storage/migration/struct.StorageIterator.html\" title=\"struct frame_support::storage::migration::StorageIterator\">StorageIterator</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::storage::migration::StorageIterator"]},{"text":"impl&lt;K, T, H&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/storage/migration/struct.StorageKeyIterator.html\" title=\"struct frame_support::storage::migration::StorageKeyIterator\">StorageKeyIterator</a>&lt;K, T, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::storage::migration::StorageKeyIterator"]},{"text":"impl&lt;Prefix, Value, QueryKind, OnEmpty&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/storage/types/struct.StorageValue.html\" title=\"struct frame_support::storage::types::StorageValue\">StorageValue</a>&lt;Prefix, Value, QueryKind, OnEmpty&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;OnEmpty: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Prefix: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;QueryKind: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Value: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::storage::types::value::StorageValue"]},{"text":"impl&lt;Prefix, Hasher, Key, Value, QueryKind, OnEmpty&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/storage/types/struct.StorageMap.html\" title=\"struct frame_support::storage::types::StorageMap\">StorageMap</a>&lt;Prefix, Hasher, Key, Value, QueryKind, OnEmpty&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Hasher: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;OnEmpty: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Prefix: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;QueryKind: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Value: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::storage::types::map::StorageMap"]},{"text":"impl&lt;Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/storage/types/struct.StorageDoubleMap.html\" title=\"struct frame_support::storage::types::StorageDoubleMap\">StorageDoubleMap</a>&lt;Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Hasher1: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hasher2: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Key1: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Key2: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;OnEmpty: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Prefix: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;QueryKind: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Value: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::storage::types::double_map::StorageDoubleMap"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/storage/types/struct.OptionQuery.html\" title=\"struct frame_support::storage::types::OptionQuery\">OptionQuery</a>","synthetic":true,"types":["frame_support::storage::types::OptionQuery"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/storage/types/struct.ValueQuery.html\" title=\"struct frame_support::storage::types::ValueQuery\">ValueQuery</a>","synthetic":true,"types":["frame_support::storage::types::ValueQuery"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/storage/struct.PrefixIterator.html\" title=\"struct frame_support::storage::PrefixIterator\">PrefixIterator</a>&lt;T&gt;","synthetic":true,"types":["frame_support::storage::PrefixIterator"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/pallet_prelude/struct.Identity.html\" title=\"struct frame_support::pallet_prelude::Identity\">Identity</a>","synthetic":true,"types":["frame_support::hash::Identity"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/pallet_prelude/struct.Twox64Concat.html\" title=\"struct frame_support::pallet_prelude::Twox64Concat\">Twox64Concat</a>","synthetic":true,"types":["frame_support::hash::Twox64Concat"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/pallet_prelude/struct.Blake2_128Concat.html\" title=\"struct frame_support::pallet_prelude::Blake2_128Concat\">Blake2_128Concat</a>","synthetic":true,"types":["frame_support::hash::Blake2_128Concat"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/pallet_prelude/struct.Blake2_128.html\" title=\"struct frame_support::pallet_prelude::Blake2_128\">Blake2_128</a>","synthetic":true,"types":["frame_support::hash::Blake2_128"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/pallet_prelude/struct.Blake2_256.html\" title=\"struct frame_support::pallet_prelude::Blake2_256\">Blake2_256</a>","synthetic":true,"types":["frame_support::hash::Blake2_256"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/pallet_prelude/struct.Twox128.html\" title=\"struct frame_support::pallet_prelude::Twox128\">Twox128</a>","synthetic":true,"types":["frame_support::hash::Twox128"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/pallet_prelude/struct.Twox256.html\" title=\"struct frame_support::pallet_prelude::Twox256\">Twox256</a>","synthetic":true,"types":["frame_support::hash::Twox256"]},{"text":"impl&lt;BlockNumber&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"frame_support/traits/schedule/enum.DispatchTime.html\" title=\"enum frame_support::traits::schedule::DispatchTime\">DispatchTime</a>&lt;BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::traits::schedule::DispatchTime"]},{"text":"impl&lt;F, T&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/traits/struct.FilterStackGuard.html\" title=\"struct frame_support::traits::FilterStackGuard\">FilterStackGuard</a>&lt;F, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::traits::FilterStackGuard"]},{"text":"impl&lt;F, T&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/traits/struct.ClearFilterGuard.html\" title=\"struct frame_support::traits::ClearFilterGuard\">ClearFilterGuard</a>&lt;F, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as <a class=\"trait\" href=\"frame_support/traits/trait.FilterStack.html\" title=\"trait frame_support::traits::FilterStack\">FilterStack</a>&lt;T&gt;&gt;::<a class=\"type\" href=\"frame_support/traits/trait.FilterStack.html#associatedtype.Stack\" title=\"type frame_support::traits::FilterStack::Stack\">Stack</a>: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::traits::ClearFilterGuard"]},{"text":"impl&lt;S, L, K, T&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/traits/struct.StorageMapShim.html\" title=\"struct frame_support::traits::StorageMapShim\">StorageMapShim</a>&lt;S, L, K, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::traits::StorageMapShim"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"frame_support/traits/enum.ExistenceRequirement.html\" title=\"enum frame_support::traits::ExistenceRequirement\">ExistenceRequirement</a>","synthetic":true,"types":["frame_support::traits::ExistenceRequirement"]},{"text":"impl&lt;B, P&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"frame_support/traits/enum.SignedImbalance.html\" title=\"enum frame_support::traits::SignedImbalance\">SignedImbalance</a>&lt;B, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as <a class=\"trait\" href=\"frame_support/traits/trait.Imbalance.html\" title=\"trait frame_support::traits::Imbalance\">Imbalance</a>&lt;B&gt;&gt;::<a class=\"type\" href=\"frame_support/traits/trait.Imbalance.html#associatedtype.Opposite\" title=\"type frame_support::traits::Imbalance::Opposite\">Opposite</a>: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::traits::SignedImbalance"]},{"text":"impl&lt;Balance, Imbalance, Part1, Target1, Part2, Target2&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/traits/struct.SplitTwoWays.html\" title=\"struct frame_support::traits::SplitTwoWays\">SplitTwoWays</a>&lt;Balance, Imbalance, Part1, Target1, Part2, Target2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Imbalance: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Part1: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Part2: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Target1: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Target2: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::traits::SplitTwoWays"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"frame_support/traits/enum.BalanceStatus.html\" title=\"enum frame_support::traits::BalanceStatus\">BalanceStatus</a>","synthetic":true,"types":["frame_support::traits::BalanceStatus"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/traits/struct.WithdrawReasons.html\" title=\"struct frame_support::traits::WithdrawReasons\">WithdrawReasons</a>","synthetic":true,"types":["frame_support::traits::WithdrawReasons"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/traits/struct.TestRandomness.html\" title=\"struct frame_support::traits::TestRandomness\">TestRandomness</a>","synthetic":true,"types":["frame_support::traits::TestRandomness"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/traits/struct.CallMetadata.html\" title=\"struct frame_support::traits::CallMetadata\">CallMetadata</a>","synthetic":true,"types":["frame_support::traits::CallMetadata"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/traits/struct.GetDefault.html\" title=\"struct frame_support::traits::GetDefault\">GetDefault</a>","synthetic":true,"types":["frame_support::traits::GetDefault"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/traits/struct.U128CurrencyToVote.html\" title=\"struct frame_support::traits::U128CurrencyToVote\">U128CurrencyToVote</a>","synthetic":true,"types":["frame_support::traits::U128CurrencyToVote"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/traits/struct.SaturatingCurrencyToVote.html\" title=\"struct frame_support::traits::SaturatingCurrencyToVote\">SaturatingCurrencyToVote</a>","synthetic":true,"types":["frame_support::traits::SaturatingCurrencyToVote"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/traits/struct.PalletVersion.html\" title=\"struct frame_support::traits::PalletVersion\">PalletVersion</a>","synthetic":true,"types":["frame_support::traits::PalletVersion"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/weights/constants/struct.BlockExecutionWeight.html\" title=\"struct frame_support::weights::constants::BlockExecutionWeight\">BlockExecutionWeight</a>","synthetic":true,"types":["frame_support::weights::constants::BlockExecutionWeight"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/weights/constants/struct.ExtrinsicBaseWeight.html\" title=\"struct frame_support::weights::constants::ExtrinsicBaseWeight\">ExtrinsicBaseWeight</a>","synthetic":true,"types":["frame_support::weights::constants::ExtrinsicBaseWeight"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/weights/constants/struct.RocksDbWeight.html\" title=\"struct frame_support::weights::constants::RocksDbWeight\">RocksDbWeight</a>","synthetic":true,"types":["frame_support::weights::constants::RocksDbWeight"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/weights/constants/struct.ParityDbWeight.html\" title=\"struct frame_support::weights::constants::ParityDbWeight\">ParityDbWeight</a>","synthetic":true,"types":["frame_support::weights::constants::ParityDbWeight"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"frame_support/weights/priority/enum.FrameTransactionPriority.html\" title=\"enum frame_support::weights::priority::FrameTransactionPriority\">FrameTransactionPriority</a>","synthetic":true,"types":["frame_support::weights::priority::FrameTransactionPriority"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"frame_support/weights/enum.Pays.html\" title=\"enum frame_support::weights::Pays\">Pays</a>","synthetic":true,"types":["frame_support::weights::Pays"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"frame_support/weights/enum.DispatchClass.html\" title=\"enum frame_support::weights::DispatchClass\">DispatchClass</a>","synthetic":true,"types":["frame_support::weights::DispatchClass"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/weights/struct.DispatchInfo.html\" title=\"struct frame_support::weights::DispatchInfo\">DispatchInfo</a>","synthetic":true,"types":["frame_support::weights::DispatchInfo"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/weights/struct.PostDispatchInfo.html\" title=\"struct frame_support::weights::PostDispatchInfo\">PostDispatchInfo</a>","synthetic":true,"types":["frame_support::weights::PostDispatchInfo"]},{"text":"impl&lt;WD, CD, PF&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/weights/struct.FunctionOf.html\" title=\"struct frame_support::weights::FunctionOf\">FunctionOf</a>&lt;WD, CD, PF&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CD: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PF: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;WD: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::weights::FunctionOf"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/weights/struct.RuntimeDbWeight.html\" title=\"struct frame_support::weights::RuntimeDbWeight\">RuntimeDbWeight</a>","synthetic":true,"types":["frame_support::weights::RuntimeDbWeight"]},{"text":"impl&lt;Balance&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/weights/struct.WeightToFeeCoefficient.html\" title=\"struct frame_support::weights::WeightToFeeCoefficient\">WeightToFeeCoefficient</a>&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::weights::WeightToFeeCoefficient"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/weights/struct.IdentityFee.html\" title=\"struct frame_support::weights::IdentityFee\">IdentityFee</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::weights::IdentityFee"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/weights/struct.PerDispatchClass.html\" title=\"struct frame_support::weights::PerDispatchClass\">PerDispatchClass</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["frame_support::weights::PerDispatchClass"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance0.html\" title=\"struct frame_support::instances::Instance0\">Instance0</a>","synthetic":true,"types":["frame_support::instances::Instance0"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance1.html\" title=\"struct frame_support::instances::Instance1\">Instance1</a>","synthetic":true,"types":["frame_support::instances::Instance1"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance2.html\" title=\"struct frame_support::instances::Instance2\">Instance2</a>","synthetic":true,"types":["frame_support::instances::Instance2"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance3.html\" title=\"struct frame_support::instances::Instance3\">Instance3</a>","synthetic":true,"types":["frame_support::instances::Instance3"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance4.html\" title=\"struct frame_support::instances::Instance4\">Instance4</a>","synthetic":true,"types":["frame_support::instances::Instance4"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance5.html\" title=\"struct frame_support::instances::Instance5\">Instance5</a>","synthetic":true,"types":["frame_support::instances::Instance5"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance6.html\" title=\"struct frame_support::instances::Instance6\">Instance6</a>","synthetic":true,"types":["frame_support::instances::Instance6"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance7.html\" title=\"struct frame_support::instances::Instance7\">Instance7</a>","synthetic":true,"types":["frame_support::instances::Instance7"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance8.html\" title=\"struct frame_support::instances::Instance8\">Instance8</a>","synthetic":true,"types":["frame_support::instances::Instance8"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance9.html\" title=\"struct frame_support::instances::Instance9\">Instance9</a>","synthetic":true,"types":["frame_support::instances::Instance9"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance10.html\" title=\"struct frame_support::instances::Instance10\">Instance10</a>","synthetic":true,"types":["frame_support::instances::Instance10"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance11.html\" title=\"struct frame_support::instances::Instance11\">Instance11</a>","synthetic":true,"types":["frame_support::instances::Instance11"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance12.html\" title=\"struct frame_support::instances::Instance12\">Instance12</a>","synthetic":true,"types":["frame_support::instances::Instance12"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance13.html\" title=\"struct frame_support::instances::Instance13\">Instance13</a>","synthetic":true,"types":["frame_support::instances::Instance13"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance14.html\" title=\"struct frame_support::instances::Instance14\">Instance14</a>","synthetic":true,"types":["frame_support::instances::Instance14"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"frame_support/instances/struct.Instance15.html\" title=\"struct frame_support::instances::Instance15\">Instance15</a>","synthetic":true,"types":["frame_support::instances::Instance15"]},{"text":"impl <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sync.html\" title=\"trait frame_support::dispatch::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"frame_support/enum.Never.html\" title=\"enum frame_support::Never\">Never</a>","synthetic":true,"types":["frame_support::Never"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()