from django.db import models

# Create your models here.
class Department(models.Model):
    deptno=models.IntegerField(primary_key=True)
    deptname=models.CharField(max_length=50)
    location=models.CharField(max_length=50)

class Employee(models.Model):
    empno=models.IntegerField(primary_key=True)
    empname=models.CharField(max_length=50)
    salary=models.IntegerField()
    department=models.ForeignKey(Department,null=True,on_delete=models.SET_NULL)
    profile_pic=models.ImageField(upload_to='images/',null=True)
    video=models.FileField(upload_to='videos/',null=True)


