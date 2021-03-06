
from django.db import models
from datetime import datetime

# Create your models here.
class Basespace(models.Model):
    bs_email = models.EmailField(null=False, blank=False)
    bs_pwd = models.CharField(max_length=50, blank=False, null=False)
    bs_access_token = models.CharField(max_length=120, blank=False, null=False)
    bs_user_id = models.CharField(max_length=20, blank=False, null=False)
    novogene_bed_id = models.CharField(max_length=20, blank=False, null=False)
    novogene_gcc_id = models.CharField(max_length=20, blank=False, null=False)
    fulgent_bed_id = models.CharField(max_length=20, blank=False, null=False)
    fulgent_gcc_id = models.CharField(max_length=20, blank=False, null=False)
    bs_date_created = models.DateTimeField(auto_now_add=True)
    bs_expiry_on = models.DateTimeField(null=True)
    bs_credits = models.IntegerField(null=True)
    bs_active = models.BooleanField(default=True)

    def __str__(self):
        return "ID: %s, Email: %s" % (self.id, self.bs_email)


class Project(models.Model):
    bs_user_id = models.ForeignKey(Basespace, on_delete=models.PROTECT, null=False)
    project_name = models.CharField(max_length=40, blank=False, null=False)
    bs_default_project = models.CharField(max_length=40, blank=False, null=False)
    bs_project_id = models.CharField(max_length=40, blank=False, null=False)
    project_type = models.CharField(max_length=40, blank=False, null=False)
    project_created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "ID: %s, ProjectName: %s"%(self.id, self.project_name)


class Biosample(models.Model):
    project_id = models.ForeignKey(Project, on_delete=models.PROTECT, null=False)
    biosample_id = models.CharField(max_length=40, blank=False, null=True)
    biosample_type = models.CharField(max_length=20, blank=False, null=True)
    biosample_name = models.CharField(max_length=120, blank=False, null=True)
    biosample_path = models.CharField(max_length=480, blank=False, null=True)
    library_id = models.CharField(max_length=40, blank=False, null=True)
    biosample_created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "ID: %s, BiosampleName: %s" % (self.id, self.biosample_name)


class PipelineTO(models.Model):
    project_name = models.CharField(max_length=120, null=False, blank=False)
    project_id = models.ForeignKey(Project, on_delete=models.PROTECT, blank=True, null=True)
    biosample_t_file1 = models.FileField(Project, blank=False, null=False)
    biosample_t_file2 = models.FileField(Project, blank=False, null=False)
    biosample_t_file3 = models.FileField(Project, blank=False, null=False)
    biosample_t_file4 = models.FileField(Project, blank=False, null=False)
    biosample_to_id = models.ForeignKey(Biosample, on_delete=models.PROTECT, null=False)
    project_cancer_type = models.CharField(max_length=120, null=False)
    pipeline_initiated_on = models.DateTimeField(auto_now_add=True)
    pipeline_finished_on = models.DateTimeField(blank=True)
    pipeline_status = models.CharField(blank=True, max_length=120)

class AnalysisStatus(models.Model):
    analysis_type = models.CharField(max_length=120, blank=False, null=False)
    analysis_ref_id = models.CharField(max_length=20, blank=False, null=False)
    analysis_status = models.CharField(max_length=120, blank=False, null=False)
    analysis_description = models.TextField(blank=True, null=True)
    analysis_timestamp = models.DateTimeField(auto_now_add=True)
    bs_analysis_id = models.CharField(max_length=120, blank=True, null=True)
    bs_analysis_status = models.CharField(max_length=120, blank=True, null=True)
    bs_analysis_name = models.CharField(max_length=120, blank=True, null=True)

