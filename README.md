# cdip_human_phantom
This repository contains packages, scripts, and notebooks for the following article Consistency of resting-sta fMRI connectivity on a single individual over 2.5 years and 13 sites using the Canadian dementia imaging protocol (to add link and DOI).

Click the following link to reproduce the analysis on binder: 

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/SIMEXP/cdip_human_phantom/master)


Here is a brief description of each item in the repository:

**Matlab Scripts**

* **niak_pipeline_t1_average.m** - Octave script averaging T1w images of a subject iteratively with linear registration inside a NIAK container.
* **Csub_t1_average_all_scans_final.m** - Octave script that calls niak_pipeline_t1_average.m and provides needed information.
* **Csub_preprocess_all_scans.m** - Octave script to run a preprocessing pipeline analysis on CDIP data inside a NIAK container.
* **HNU1_preprocess_sll_scans.m** - Octave script to run a preprocessing pipeline analysis on HNU1 data inside a NIAK container.
* **connectome_test_retest.m** - Octave script to run a connectome pipeline on preprocessed fMRI data to generate connectivity maps.
* **connectome_HNU.m** - Octave script to run a connectome pipeline on preprocessed fMRI data to generate connectivity maps.

* **all_correlations_Csub.m** - 

* **all_correlations_HNU.m** - 

* **connectome_test_only.m** - 

**Notebooks**

* **graphs.ipynb** - Jupter notebook that continas graphs for Csub intra-site, inter-scan consistency over time (2.5 years),Csub vendor consistency and HNU intra-individual consistency per network, and across all networks

* **stats_repro.ipynb** - Jupyter notebook used for generating the statistics used to assess consistency of individual rsfMRI measures within/between sites

* **stats_fingerprinting.ipynb** - Jupyter notebook used to assess the ability of a simple data-driven cluster analysis to recover the identity of subjects based on connectivity maps of a single network

* **Csub-intra_png** - images used for average connectivity maps

* **all_correlation_list.csv** - spreadsheet with correlations for intra-site and inter-scan consistency

* **HNU1_Csub.csv** -


**Dockerfile** - defines the executable environment used for binder container

**HNU1_dataset_with_Csub** - dashboard that shows the consistency of brain connectivity maps generated using resting-state functional magnetic resonance imaging (rsfMRI) across 17 visits of a single individual


This repository has also been archived on Zenodo: (provide link and DOI)
