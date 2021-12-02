
from django.db import models
from django.utils import timezone


class Basespace(models.Model):
    bs_email = models.EmailField(null=False, blank=False)
    bs_pwd = models.CharField(max_length=50, blank=False, null=False)
    bs_access_token = models.CharField(max_length=120, blank=False, null=False)
    bs_user_id = models.CharField(max_length=20, blank=False, null=False)
    bs_credits = models.IntegerField(null=True)
    def __str__(self):
        return "ID: %s, Email: %s" % (self.id, self.bs_email)
    

class Applications(models.Model):
    classification_choices = (
        ('None', 'None'),
        ("Resequencing", "Resequencing"),
        ("SmallRNA",  "SmallRNA"),
        ("TargetedSequencing", "TargetedSequencing"),
        ("DeNovoAssembly",  "DeNovoAssembly"),
        ("RNASeq", "RNASeq"),
        ("GeneFusionDetection", "GeneFusionDetection"),
        ("ChiPSeq", "ChiPSeq"),
        ("MethylSeq",  "MethylSeq"),
        ("Metagenomics", "Metagenomics"),
        ("TumorNormal", "TumorNormal"),
        ("VariantAnalysis", "VariantAnalysis"),
        ("DifferentialExpression", "DifferentialExpression"),
        ("Quality", "Quality"),
        ("SyntheticLongReads", "SyntheticLongReads"),
        ("Proteomics", "Proteomics"),


    )
    feature_choices = (
        ('None', 'None'),
        ("GrantInheritanceDisabled", "GrantInheritanceDisabled"),
        ("IsAppRegisteredToPlatform", "IsAppRegisteredToPlatform")
    )

    basespace_id = models.ForeignKey(
        Basespace, on_delete=models.PROTECT, null=False)
    application_id = models.IntegerField(null=False, blank=False)
    href = models.URLField(null=False, blank=False)
    name = models.CharField(max_length=1000, null=False, blank=False)
    company_name = models.CharField(max_length=1000, null=False, blank=False)
    version_number = models.CharField(max_length=100, null=False, blank=False)
    href_logo = models.URLField(null=False, blank=False)
    homepage_ri = models.URLField(null=False, blank=False)
    short_description = models.CharField(
        max_length=5000, null=False, blank=False)
    date_created = models.DateTimeField(
        auto_now_add=True, null=False, blank=False)
    date_published = models.DateTimeField(default=timezone.now)
    publish_status = models.CharField(max_length=1000, null=False, blank=False)
    is_billing_activated = models.BooleanField(
        default=True, null=False, blank=False)
    category = models.CharField(max_length=1000, null=True, blank=True)
    classifications = models.CharField(
        max_length=1000, choices=classification_choices, default=None, null=False, blank=False)
    app_family_slug = models.CharField(
        max_length=2000, null=False, blank=False)
    app_version_slug = models.CharField(
        max_length=2000, null=False, blank=False)
    features = models.CharField(
        max_length=1000, choices=feature_choices, default=None, null=False, blank=False)

    def __str__(self):
        return self.application_id

class Project(models.Model):
    bs_user_id = models.ForeignKey(
        Basespace, on_delete=models.PROTECT, null=False)
    project_name = models.CharField(max_length=40, blank=False, null=False)
    bs_default_project = models.CharField(
        max_length=40, blank=False, null=False)
    bs_project_id = models.CharField(max_length=40, blank=False, null=False)
    project_type = models.CharField(max_length=40, blank=False, null=False)
    project_created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "ID: %s, ProjectName: %s" % (self.bs_project_id, self.project_name)


class Biosample(models.Model):
    project_id = models.ForeignKey(
        Project, on_delete=models.PROTECT, null=False)
    biosample_id = models.CharField(max_length=40, blank=False, null=True)
    biosample_type = models.CharField(max_length=20, blank=False, null=True)
    biosample_name = models.CharField(max_length=120, blank=False, null=True)
    biosample_path = models.CharField(max_length=480, blank=False, null=True)
    library_id = models.CharField(max_length=40, blank=False, null=True)
    biosample_created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "ID: %s, BiosampleName: %s" % (self.biosample_id, self.biosample_name)